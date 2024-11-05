import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import ContactPage from "./ContanctPage";
import AboutPage from "./AboutPage";
import Cart from "./Cart";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navigation />
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path={"/product/:productId"} element={<ProductPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
