import mongoose from "mongoose";
import ProductModels from "../models/productModels.js";

export const getProduct = async (req, res) => {
  try {
    const productModel = await ProductModels.find();

    res.status(200).json(productModel);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const postProducts = async (req, res) => {
  const { title, description, price, brand, category, images, thumbnail } = req.body;

  const newPostProducts = new ProductModels({
    title,
    description,
    price,
    brand,
    category,
    images,
    thumbnail,
  });
  try {
    await newPostProducts.save();

    res.status(201).json(newPostProducts);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getProductsId = async (req, res) => {
  try {
    const productsId = await ProductModels.findById(req.params.id);

    res.status(200).json(productsId);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
