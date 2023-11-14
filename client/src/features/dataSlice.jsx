import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDetailProductApi, getProductApi, postProductApi } from "../api";

export const fetchData = createAsyncThunk("data/fetchData", async (page) => {
  const data = await getProductApi(page);
  return data;
});

export const postData = createAsyncThunk("data/postData", async (postData) => {
  const response = await fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
});

export const fetchProductById = createAsyncThunk("data/fetchProductById", async (id) => {
  const data = await getDetailProductApi(id);
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.products;
        state.totalProducts = action.payload.totalProducts;
        state.page = action.payload.page;
        state.endIndex = action.payload.endIndex;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error posting data:", action.error.message);
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error fetching data:", action.error.message);
      });
  },
});

export default dataSlice.reducer;
