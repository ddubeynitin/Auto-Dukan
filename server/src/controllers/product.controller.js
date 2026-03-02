const Product = require("../models/product.model");

const slugify = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const toProductResponse = (product) => {
  const discountPercent =
    product.mrp > 0 ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;

  return {
    id: product._id,
    name: product.name,
    slug: product.slug,
    imageUrl: product.imageUrl,
    category: product.category,
    brand: product.brand,
    partNumber: product.partNumber,
    type: product.type,
    description: product.description,
    instruction: product.instruction,
    precaution: product.precaution,
    price: product.price,
    mrp: product.mrp,
    stock: product.stock,
    supplierCode: product.supplierCode,
    featured: product.featured,
    isActive: product.isActive,
    discountPercent,
  };
};

const seedProductsIfEmpty = async () => {
  const count = await Product.countDocuments();
  if (count > 0) return;

  const defaultProducts = [
    {
      name: "Tyre Shine (5 LTR)",
      slug: "tyre-shine-5-ltr",
      imageUrl: "/images/featured_product/tyre_shine.webp",
      category: "car accessories",
      brand: "WASH4SURE",
      partNumber: "AD1507",
      type: "OES",
      description:
        "Tyre dressing with high gloss and durability. Suitable for tyres, exterior vinyl and rubber parts.",
      instruction:
        "Apply a small quantity on dry surface using cloth. Buff with sponge for a darker finish.",
      precaution: "Use on dry surface. Store in cool and dark place.",
      price: 675,
      mrp: 1499,
      stock: 50,
      supplierCode: "0",
      featured: true,
    },
    {
      name: "Effortless One Step Rubbing Compound - 500 GM",
      slug: "effortless-one-step-rubbing-compound-500-gm",
      imageUrl: "/images/featured_product/tyre_shine.webp",
      category: "car care",
      brand: "WASH4SURE",
      partNumber: "AD1801",
      type: "OES",
      description: "One step rubbing compound for paint correction and gloss restoration.",
      instruction: "Apply with microfiber cloth and buff in circular motion.",
      precaution: "Do not apply on hot surface. Keep away from children.",
      price: 1299,
      mrp: 1949,
      stock: 24,
      supplierCode: "0",
      featured: true,
    },
    {
      name: "AutoDukan Coolant Blue",
      slug: "autodukan-coolant-blue",
      imageUrl: "/images/featured_product/tyre_shine.webp",
      category: "car care",
      brand: "AutoDukan",
      partNumber: "AD2102",
      type: "Aftermarket",
      description: "Ready-to-use coolant for thermal stability and anti-corrosion support.",
      instruction: "Fill to recommended level after draining old coolant as required.",
      precaution: "Avoid direct contact with skin and eyes.",
      price: 259,
      mrp: 369,
      stock: 120,
      supplierCode: "0",
      featured: true,
    },
  ];

  await Product.insertMany(defaultProducts);
};

const getProducts = async (req, res) => {
  try {
    await seedProductsIfEmpty();

    const { featured, limit, category, q } = req.query;
    const filter = { isActive: true };

    if (typeof featured !== "undefined") {
      filter.featured = featured === "true";
    }

    if (category) {
      filter.category = category;
    }

    if (q) {
      filter.name = { $regex: q, $options: "i" };
    }

    let query = Product.find(filter).sort({ createdAt: -1 });
    if (limit) query = query.limit(Number(limit));

    const products = await query;
    return res.status(200).json(products.map(toProductResponse));
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug, isActive: true });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(toProductResponse(product));
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      name,
      imageUrl,
      category,
      brand,
      partNumber,
      type,
      description,
      instruction,
      precaution,
      price,
      mrp,
      stock,
      supplierCode,
      featured,
      isActive,
      slug,
    } = req.body;

    if (!name || !imageUrl || typeof price === "undefined" || typeof mrp === "undefined") {
      return res.status(400).json({
        message: "name, imageUrl, price and mrp are required",
      });
    }

    const finalSlug = slugify(slug || name);
    if (!finalSlug) {
      return res.status(400).json({ message: "Invalid product slug" });
    }

    const exists = await Product.findOne({ slug: finalSlug });
    if (exists) {
      return res.status(409).json({ message: "Product with same slug already exists" });
    }

    const product = await Product.create({
      name: name.trim(),
      slug: finalSlug,
      imageUrl: imageUrl.trim(),
      category: category || "",
      brand: brand || "",
      partNumber: partNumber || "",
      type: type || "OES",
      description: description || "",
      instruction: instruction || "",
      precaution: precaution || "",
      price: Number(price),
      mrp: Number(mrp),
      stock: typeof stock === "undefined" ? 0 : Number(stock),
      supplierCode: supplierCode || "0",
      featured: typeof featured === "boolean" ? featured : true,
      isActive: typeof isActive === "boolean" ? isActive : true,
    });

    return res.status(201).json(toProductResponse(product));
  } catch (error) {
    return res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};

const getAllProductsForAdmin = async (_req, res) => {
  try {
    await seedProductsIfEmpty();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return res.status(200).json(products.map(toProductResponse));
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch admin products", error: error.message });
  }
};

module.exports = {
  getProducts,
  getProductBySlug,
  createProduct,
  getAllProductsForAdmin,
};
