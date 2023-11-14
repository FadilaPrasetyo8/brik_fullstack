import mongoose from "mongoose";
import UserModels from "../models/user.js";
import { fi } from "@faker-js/faker";

mongoose.connect(`mongodb://127.0.0.1:27017/brikfs`);

const UserData = [{ name: "Jhon Doe", email: "jhondoe@gmail.com", password: "123456" }];

const seedUser = async () => {
  try {
    await UserModels.deleteMany({});

    await UserModels.insertMany(UserData);
    console.log("User seeded");
  } catch (error) {
    console.error("Seeder failed", error);
  } finally {
    mongoose.disconnect();
  }
};

seedUser();
