import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componentes/App";
import Nav from "./extra/NavBar";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./componentes/store";
import { About } from "./componentes/About";
import { AllProducts } from "./componentes/AllProducts";
import { Contact } from "./componentes/Contact";
import { Account } from "./componentes/Account";
import NotFound from "./componentes/NotFound";
import ProductPage from "./componentes/ProductPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="allProduct" element={<AllProducts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
