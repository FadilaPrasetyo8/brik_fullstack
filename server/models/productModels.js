import mongoose from "mongoose";

const productShema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  brand: String,
  category: String,
  images: String,
  thumbnail: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const ProductModels = mongoose.model("productModels", productShema);

export default ProductModels;
