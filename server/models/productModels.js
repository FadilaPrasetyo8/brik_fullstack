import mongoose from "mongoose";

const productShema = mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: String,
  weight: Number,
  width: Number,
  length: Number,
  height: Number,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const ProductModels = mongoose.model("productModels", productShema);

export default ProductModels;
