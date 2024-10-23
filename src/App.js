import "./Menu.css";

import "./App.css";

import { useState } from "react";
import Products from "./Products";

import Cart from "./Cart";
import CategoriesFilters from "./CategoriesFilters";

function App() {
  //   const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="wrapper">
      <CategoriesFilters
        setSelectedCategory={setSelectedCategory}
        setCartItems={setCartItems}
      />

      <Products
        addProductToCart={setCartItems}
        category={selectedCategory}
        cartItems={cartItems}
      />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
