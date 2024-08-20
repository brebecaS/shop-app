import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect, useState } from "react";
// "https://fakestoreapi.com/products/"

export default function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(async (response) => {
      const productsResponse = await response.json();

      setProducts(productsResponse);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Filters
          productsList={products}
          onCategoryChange={handleCategoryChange}
        />
        <Products productsList={products} category={category} />
        <Cart />
      </div>
    </>
  );
}
