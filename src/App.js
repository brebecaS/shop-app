import "./Menu.css";

import "./App.css";

import { useState, useEffect } from "react";
import Products from "./Products";

import Cart from "./Cart";
import CategoriesFilters from "./CategoriesFilters";

function App() {
  //   const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((decodedResponse) => setProducts(decodedResponse));
  }, []);

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
