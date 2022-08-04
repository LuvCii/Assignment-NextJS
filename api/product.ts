import { productType } from "../models/product";
import instance from "./instance";

export const readSlug = (slug: productType) => {
  return instance.get(`/product/${slug}`);
};

export const readId = (_id: productType) => {
  return instance.get(`/products/${_id}`);
};

export const add = (product: productType) => {
  return instance.post("/products", product);
};

export const edit = (product: productType) => {
  return instance.patch(`/products/${product._id}`, product);
};

export const removeItem = (_id: productType) => {
  return instance.delete(`/products/${_id}`);
};
