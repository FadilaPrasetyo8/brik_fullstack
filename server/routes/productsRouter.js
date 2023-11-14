import express from "express";

import {
  getProduct,
  getProductsId,
  postProducts,
  login,
} from "../controller/productsController.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", postProducts);
router.get("/:id", getProductsId);
router.post("/login", login);

export default router;
