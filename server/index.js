import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(productsRouter);

// const CONNECTION_URL = "mongodb://127.0.0.1:27017/brikfs";
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("MongoDB connected..."))
      .catch((error) => console.log(error.message));
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.log(message.error);
  }
};

startServer();
