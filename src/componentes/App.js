import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./productSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(async (response) => {
      const productsResponse = await response.json();

      dispatch(setProducts(productsResponse));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Filters />
      <Products />
      <Cart />
    </div>
  );
}
