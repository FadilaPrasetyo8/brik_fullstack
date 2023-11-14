import axios from "axios";

export const getProductApi = async () => {
  try {
    const getProduct = await axios.get("http://localhost:5000/", {
      params: {
        page: 1,
        perPage: 10,
      },
    });
    console.log(getProduct.data);
    return getProduct.data.products;
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

export const LoginApi = async ({ email, password, token }) => {
  return axios.post(
    "http://localhost:5000/login",
    {
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    }
  );
};
