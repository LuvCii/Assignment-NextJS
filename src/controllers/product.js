import slugify from "slugify";
import Product from "../models/product";

export const list = async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    return res.json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm nào",
    });
  }
};

export const create = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const product = await new Product(req.body).save();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không thêm được sản phẩm",
    });
  }
};

export const readId = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id }).exec();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm",
    });
  }
};

export const readSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await Product.findOne({ slug }).exec();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không có sản phẩm",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không xóa được!",
    });
  }
};

export const update = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  const condition = { _id: req.params.id };
  const doc = req.body;
  const option = { new: true };
  try {
    const product = await Product.findOneAndUpdate(condition, doc, option);
    return res.json(product);
  } catch (error) {
    return res.status(400).json({
      message: "Không sửa được!",
    });
  }
};
