import { categoryType } from "../models/category";
import instance from "./instance";

export const addCate = (category: categoryType) => {
  return instance.post("/category",category)
};


export const listCate = () => {
  return instance.get("/category")
}

export const getCate = (_id: string) => {
  return instance.get(`/category/${_id}`)
}

export const updateCate = (category: categoryType) => {
  return instance.patch(`/category/${category._id}`,category)
}

export const removeCate = (_id: String) => {
  return instance.delete(`/category/${_id}`)
}
