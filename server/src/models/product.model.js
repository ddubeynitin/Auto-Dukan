const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    imageUrl: { type: String, required: true, trim: true },
    category: { type: String, default: "", trim: true },
    brand: { type: String, default: "", trim: true },
    partNumber: { type: String, default: "", trim: true },
    type: { type: String, enum: ["OEM", "OES", "Aftermarket"], default: "OES" },
    description: { type: String, default: "" },
    instruction: { type: String, default: "" },
    precaution: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    mrp: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    supplierCode: { type: String, default: "0", trim: true },
    featured: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
