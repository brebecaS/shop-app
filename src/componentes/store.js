import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: productsReducer,
  cartReducer,
});

export default store;
