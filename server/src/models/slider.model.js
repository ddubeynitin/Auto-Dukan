const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    publicId: { type: String },
    title:{ type: String, default:"" },
    caption: { type: String, default: "" },
    link: { type: String, default: "#" },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Slider", sliderSchema);
