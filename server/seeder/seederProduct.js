import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import ProductModels from "../models/productModels.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(`mongodb://127.0.0.1:27017/brikfs`);

const generateFakeProduct = () => {
  const product = {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    images: faker.image.urlLoremFlickr({ category: "business" }),
    brand: faker.commerce.productMaterial(),
    category: faker.commerce.product(),
    thumbnail: faker.image.avatar(),
  };
  return product;
};

const seedDatabase = async () => {
  try {
    await ProductModels.deleteMany({});

    const products = [];
    for (let i = 0; i < 100; i++) {
      products.push(generateFakeProduct());
    }
    await ProductModels.insertMany(products);
    console.log("Database seeded");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedDatabase();
