import axios from "axios";
import { API_BASE_URL } from "../config/api";

const CART_USER_ID_KEY = "autodukan_guest_id";

const cartApi = axios.create({
  baseURL: `${API_BASE_URL}/api/cart`,
});

export const getOrCreateCartUserId = () => {
  const existing = localStorage.getItem(CART_USER_ID_KEY);
  if (existing) return existing;

  const newId = `guest_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  localStorage.setItem(CART_USER_ID_KEY, newId);
  return newId;
};

export const fetchCart = async () => {
  const userId = getOrCreateCartUserId();
  const response = await cartApi.get("/", { params: { userId } });
  return response.data;
};

export const addToCart = async ({ productId, quantity = 1 }) => {
  const userId = getOrCreateCartUserId();
  const response = await cartApi.post("/items", {
    userId,
    productId,
    quantity,
  });
  return response.data;
};

export const updateCartItem = async ({ productId, quantity }) => {
  const userId = getOrCreateCartUserId();
  const response = await cartApi.patch(`/items/${productId}`, {
    userId,
    quantity,
  });
  return response.data;
};

export const removeCartItem = async (productId) => {
  const userId = getOrCreateCartUserId();
  const response = await cartApi.delete(`/items/${productId}`, {
    params: { userId },
  });
  return response.data;
};

export const clearCart = async () => {
  const userId = getOrCreateCartUserId();
  const response = await cartApi.delete("/clear", {
    params: { userId },
  });
  return response.data;
};
