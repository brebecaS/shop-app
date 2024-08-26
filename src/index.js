import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componentes/App";
import Nav from "./extra/NavBar";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./componentes/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Nav />
      <App />
    </Provider>
  </BrowserRouter>
);
