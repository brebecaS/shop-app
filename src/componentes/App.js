import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./productSlice";
import BasicModal from "../extra/Modal";

// 1. create context
export const ChangeContext = createContext();

export default function App() {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(async (response) => {
      const productsResponse = await response.json();

      dispatch(setProducts(productsResponse));
    });
  }, [dispatch]);

  // 2. wrap the component with the provider
  // 3. add shared state to the provider through value
  return (
    <ChangeContext.Provider value={{ handleCategoryChange }}>
      <div className="wrapper">
        <Filters />
        <Products category={category} />
        <Cart />
        <BasicModal />
      </div>
    </ChangeContext.Provider>
  );
}
