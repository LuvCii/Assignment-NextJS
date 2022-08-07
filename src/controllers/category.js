import Category from "../models/category";
import Product from "../models/product"

export const createCate = async (req,res) => {
  try {
    const category = await new Category(req.body).save()
    res.json(category)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const listCate = async (req,res) => {
  try {
    const category = await Category.find().exec()
    res.json(category)
  } catch (error) {
    res.status(400).json(error)
  }
}


export const readCate = async (req,res) => {
  try {
    const category = await Category.findOne({_id:req.params.id}).exec()
    res.json(category)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const updateCate = async (req,res) => {
  try {
    const category = await Category.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}).exec()
    res.json(category)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const removeCate = async (req,res) => {
  try {
    const category = await Category.findOneAndDelete({_id:req.params.id}).exec()
    res.json(category)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const readProOfCate = async (req,res) => {
try {
  const categoryId = await Category.findOne({_id:req.params.id}).exec()
  const products = await Product.find({categoryId}).select("-categoryId").exec()
  res.json({
    categoryId,
    products
  })
} catch (error) {
  res.status(400).json(error)
}
}

