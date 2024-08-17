import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import AllProductsPage from "./AllProductsPage";
import NavBar from "./NavBar";
import ProductPage from "./ProductPage";
import AccountPage from "./AccountPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Cart cartItems={0} />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/allProduct" element={<AllProductsPage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="products/:productID" element={<ProductPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
