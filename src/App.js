import "./Menu.css";

import "./App.css";

import { useState } from "react";
import Products from "./Products";

import Cart from "./Cart";
import CategoriesFilters from "./CategoriesFilters";

import useLoadProduct from "./hooks/useLoadProducts";
import usePostProduct from "./hooks/usePostProduct";

function App() {
  //   const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const limit = 110;
  const order = "asc";
  const products = useLoadProduct(limit, order);
  usePostProduct();

  return (
    <div className="wrapper">
      <CategoriesFilters
        setSelectedCategory={setSelectedCategory}
        setCartItems={setCartItems}
        products={products}
      />

      <Products
        addProductToCart={setCartItems}
        category={selectedCategory}
        cartItems={cartItems}
        products={products}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
