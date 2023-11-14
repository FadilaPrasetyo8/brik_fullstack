import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
