import axios from "axios";

export const getProductApi = async () => {
  try {
    const getProduct = await axios.get("http://localhost:5000/");
    return getProduct.data;
  } catch (error) {
    console.error("Error Fetching Data", error);
  }
};
