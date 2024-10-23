import "./Menu.css";

import "./App.css";

import { useState } from "react";
import Products from "./Products";

import Cart from "./Cart";
import CategoriesFilters from "./CategoriesFilters";

function App() {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="wrapper">
      <CategoriesFilters setSelectedCategory={setSelectedCategory} />

      <Products
        setNumberOfCartItems={setNumberOfCartItems}
        category={selectedCategory}
      />
      <Cart numberOfCartItems={numberOfCartItems} />
    </div>
  );
}

export default App;
