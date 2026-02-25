const Slider = require("../models/slider.model");
const sharp = require("sharp");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const createSlider = async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("No file uploaded.");
    
    // Convert to WebP using Sharp
    const webpBuffer = await sharp(req.file.buffer)
      .webp({ quality: 80 }) // Quality set karein
      .resize(1200, 400, { fit: "cover" }) // Slider standard size
      .toBuffer();

    console.log(`Received file: ${req.file.originalname} (${req.file.size} bytes)`);

    // Upload to Cloudinary using stream with timeout and better error handling
    let responded = false;
    let cld_upload_stream;
    const UPLOAD_TIMEOUT_MS = 20000; // 20s

    const timeoutHandle = setTimeout(() => {
      if (responded) return;
      responded = true;
      console.error("Cloudinary upload timed out");
      try {
        if (cld_upload_stream && typeof cld_upload_stream.destroy === "function") {
          cld_upload_stream.destroy();
        }
      } catch (err) {
        console.error("Error destroying upload stream after timeout:", err);
      }
      return res.status(504).json({ message: "Upload timed out" });
    }, UPLOAD_TIMEOUT_MS);

    cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: "ecommerce_sliders",
        format: "webp",
      },
      async (error, result) => {
        clearTimeout(timeoutHandle);
        if (responded) return;
        responded = true;

        if (error) {
          console.error("Cloudinary upload error:", error);
          return res.status(502).json({ message: "Cloudinary upload failed", error: error.message || error });
        }

        try {
          const newSlider = new Slider({
            imageUrl: result.secure_url,
            publicId: result.public_id,
            title: req.body.title,
            link: req.body.link,
            caption: req.body.caption,
            isActive: true,
          });

          await newSlider.save();
          return res.status(200).json({ message: "Success", data: newSlider });
        } catch (dbErr) {
          console.error("DB save error:", dbErr);
          return res.status(500).json({ message: "Saving slider failed", error: dbErr.message || dbErr });
        }
      },
    );

    streamifier.createReadStream(webpBuffer).pipe(cld_upload_stream);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const getSliders = async (req, res) => {
  try {
    const sliders = await Slider.find({ isActive: true }).sort({ order: 1 });
    res.json(sliders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSlider = async (req, res) => {
  try {
    const slider = await Slider.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!slider) return res.status(404).json({ error: "Slider not found" });
    res.json(slider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSlider = async (req, res) => {
  try {
    const sliderId = req.params.id;

    // 1. Database se slider find karein
    const slider = await Slider.findById(sliderId);
    if (!slider) return res.status(404).json({ message: "Slider not found" });

    // 2. Cloudinary se image delete karein (using publicId)
    await cloudinary.uploader.destroy(slider.publicId);

    // 3. Database se entry delete karein
    await Slider.findByIdAndDelete(sliderId);

    res.status(200).json({ message: "Slider and Image deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error });
  }
};

module.exports = { createSlider, getSliders, updateSlider, deleteSlider };
