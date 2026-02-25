const express = require("express");
const router = express.Router();
const {
  createSlider,
  getSliders,
  updateSlider,
  deleteSlider,
} = require("../controllers/slider.controller");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Slider routes
router.post("/admin/slider-upload", upload.single("image"), createSlider);
router.get("/", getSliders);
router.put("/admin/slider/:id", updateSlider);
router.delete("/admin/slider/:id", deleteSlider);

module.exports = router;