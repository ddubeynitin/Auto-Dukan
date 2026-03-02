const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

const getUserIdFromReq = (req) => req.body.userId || req.query.userId;

const toCartResponse = (cart) => {
  const items = cart.items.map((item) => {
    const subtotal = item.price * item.quantity;
    const discountPerUnit = Math.max(item.mrp - item.price, 0);
    const discount = discountPerUnit * item.quantity;
    return {
      productId: item.product,
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price,
      mrp: item.mrp,
      supplierCode: item.supplierCode,
      quantity: item.quantity,
      discount,
      subtotal,
    };
  });

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);
  const totalDiscount = items.reduce((sum, item) => sum + item.discount, 0);

  return {
    userId: cart.userId,
    items,
    total,
    totalDiscount,
    grandTotal: total,
  };
};

const findOrCreateCart = async (userId) => {
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = await Cart.create({ userId, items: [] });
  }
  return cart;
};

const getCart = async (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const cart = await findOrCreateCart(userId);
    return res.status(200).json(toCartResponse(cart));
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch cart", error: error.message });
  }
};

const addCartItem = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const userId = getUserIdFromReq(req);

    if (!userId || !productId) {
      return res.status(400).json({ message: "userId and productId are required" });
    }

    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cart = await findOrCreateCart(userId);
    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    if (existingItem) {
      existingItem.quantity += Math.max(Number(quantity) || 1, 1);
    } else {
      cart.items.push({
        product: product._id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        mrp: product.mrp,
        supplierCode: product.supplierCode,
        quantity: Math.max(Number(quantity) || 1, 1),
      });
    }

    await cart.save();
    return res.status(200).json(toCartResponse(cart));
  } catch (error) {
    return res.status(500).json({ message: "Failed to add cart item", error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;
    const userId = getUserIdFromReq(req);

    if (!userId || !productId || typeof quantity === "undefined") {
      return res.status(400).json({ message: "userId, productId and quantity are required" });
    }

    const cart = await findOrCreateCart(userId);
    const existingItem = cart.items.find((item) => item.product.toString() === productId);

    if (!existingItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    const normalizedQuantity = Number(quantity);
    if (normalizedQuantity <= 0) {
      cart.items = cart.items.filter((item) => item.product.toString() !== productId);
    } else {
      existingItem.quantity = normalizedQuantity;
    }

    await cart.save();
    return res.status(200).json(toCartResponse(cart));
  } catch (error) {
    return res.status(500).json({ message: "Failed to update cart item", error: error.message });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = getUserIdFromReq(req);

    if (!userId || !productId) {
      return res.status(400).json({ message: "userId and productId are required" });
    }

    const cart = await findOrCreateCart(userId);
    cart.items = cart.items.filter((item) => item.product.toString() !== productId);
    await cart.save();

    return res.status(200).json(toCartResponse(cart));
  } catch (error) {
    return res.status(500).json({ message: "Failed to remove cart item", error: error.message });
  }
};

const clearCart = async (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const cart = await findOrCreateCart(userId);
    cart.items = [];
    await cart.save();
    return res.status(200).json(toCartResponse(cart));
  } catch (error) {
    return res.status(500).json({ message: "Failed to clear cart", error: error.message });
  }
};

module.exports = {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCart,
};
