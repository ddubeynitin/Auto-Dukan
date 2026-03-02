import axios from "axios";
import { API_BASE_URL } from "../config/api";

const productApi = axios.create({
  baseURL: `${API_BASE_URL}/api/products`,
});

export const getProducts = async (params = {}) => {
  const response = await productApi.get("/", { params });
  return response.data;
};

export const getFeaturedProducts = async (limit = 10) => {
  const response = await productApi.get("/", {
    params: { featured: true, limit },
  });
  return response.data;
};

export const getProductBySlug = async (slug) => {
  const response = await productApi.get(`/${slug}`);
  return response.data;
};

export const createProduct = async (payload) => {
  const response = await productApi.post("/admin", payload);
  return response.data;
};

export const getAdminProducts = async () => {
  const response = await productApi.get("/admin/all");
  return response.data;
};
