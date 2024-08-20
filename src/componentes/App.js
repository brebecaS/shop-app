import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect, useState, createContext } from "react";
// "https://fakestoreapi.com/products/"

// 1, create context
export const CategoryChangeContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState(0);

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(async (response) => {
      const productsResponse = await response.json();

      setProducts(productsResponse);
    });
  }, []);

  // 2. wrap the component with the provider
  // 3. add shared state to the provider through value
  return (
    <CategoryChangeContext.Provider value={handleCategoryChange}>
      <div className="wrapper">
        <Filters productsList={products} />
        <Products
          productsList={products}
          category={category}
          setCart={setCart}
        />
        <Cart cart={cart} />
      </div>
    </CategoryChangeContext.Provider>
  );
}
