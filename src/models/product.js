import mongoose, { Schema, ObjectId } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 5,
      required: true,
      index: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categoryId: {
      type: ObjectId,
      ref: "Categories",
    },
    author: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);
productSchema.index({ "$**": "text" });

export default mongoose.model("Product", productSchema);
