import "./Menu.css";

import "./App.css";

import { useState, createContext } from "react";
import Products from "./Products";

import Cart from "./Cart";
import CategoriesFilters from "./CategoriesFilters";

import useLoadProduct from "./hooks/useLoadProducts";
import usePostProduct from "./hooks/usePostProduct";

export const SelectCategoryContext = createContext();
export const CartContext = createContext();

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
      <SelectCategoryContext.Provider value={setSelectedCategory}>
        <CategoriesFilters setCartItems={setCartItems} products={products} />
      </SelectCategoryContext.Provider>

      <CartContext.Provider value={{ setCartItems, cartItems }}>
        <Products category={selectedCategory} products={products} />
      </CartContext.Provider>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
