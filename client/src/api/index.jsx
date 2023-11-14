import axios from "axios";

export const getProductApi = async () => {
  try {
    const getProduct = await axios.get("http://localhost:5000/");
    return getProduct.data;
  } catch (error) {
    console.error("Error Fetching Data", error);
  }
};

export const postProductApi = async (data) => {
  try {
    const postProduct = await axios.post("http://localhost:5000/", data);
    return postProduct.data;
  } catch (error) {
    console.error("Error Post Data", error);
  }
};

export const getDetailProductApi = async (id) => {
  try {
    const getDetailProduct = await axios.get(`http://localhost:5000/${id}`);
    console.log(getDetailProduct);
    return getDetailProduct.data;
  } catch (error) {
    console.error("Error Fetching Data", error);
    throw error;
  }
};
