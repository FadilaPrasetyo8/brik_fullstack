import ProductModels from "../models/productModels.js";
import UserModels from "../models/user.js";
import jwt from "jsonwebtoken";

export const getProduct = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10;

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    const totalProducts = await ProductModels.countDocuments();
    const products = await ProductModels.find().skip(startIndex).limit(perPage);

    res.status(200).json({
      page,
      perPage,
      totalProducts,
      products,
      endIndex,
    });
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

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email == "") {
    return res.status(400).json({ success: false, message: "Email tidak boleh kosong!" });
  }

  if (password == "") {
    return res.status(400).json({ success: false, message: "Password tidak boleh kosong!" });
  }

  try {
    const user = await UserModels.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: "Akun belum terdaftar!" });
    }

    if (password !== user.password) {
      return res.status(400).json({ success: false, message: "Password salah!" });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ success: true, user: user, token: token });
  } catch (error) {}
};
