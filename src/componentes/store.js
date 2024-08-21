import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";

const store = configureStore({
  reducer: productsReducer,
});

export default store;
