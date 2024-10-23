import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import "./App.css";

import { useState } from "react";
import Products from "./Products";
import CategoriesFilters from "./CategoriesFilters";
import Cart from "./Cart";

function App() {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);

  return (
    <div className="wrapper">
      <CategoriesFilters />

      <Products setNumberOfCartItems={setNumberOfCartItems} />
      <Cart numberOfCartItems={numberOfCartItems} />
    </div>
  );
}

export default App;
