const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductBySlug,
  createProduct,
  getAllProductsForAdmin,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/admin/all", getAllProductsForAdmin);
router.post("/admin", createProduct);
router.get("/:slug", getProductBySlug);

module.exports = router;
