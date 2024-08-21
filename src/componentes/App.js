import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productSlice";
// "https://fakestoreapi.com/products/"

// 1. create context
export const ChangeContext = createContext();

export default function App() {
  // const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState(0);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(async (response) => {
      const productsResponse = await response.json();

      // setProducts(productsResponse);
      dispatch(setProducts(productsResponse));
    });
  }, []);

  // 2. wrap the component with the provider
  // 3. add shared state to the provider through value
  return (
    <ChangeContext.Provider value={{ handleCategoryChange, setCart }}>
      <div className="wrapper">
        <Filters productsList={products} />
        <Products productsList={products} category={category} />
        <Cart cart={cart} />
      </div>
    </ChangeContext.Provider>
  );
}
