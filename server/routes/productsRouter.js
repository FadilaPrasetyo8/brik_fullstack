import express from "express";

import { getProduct, getProductsId, postProducts } from "../controller/productsController.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", postProducts);
router.get("/:id", getProductsId);

export default router;
