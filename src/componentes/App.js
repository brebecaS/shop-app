import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
// "https://fakestoreapi.com/products/"
export default function App() {
  return (
    <>
      <div className="wrapper">
        <Filters />
        <Products />
        <Cart />
      </div>
    </>
  );
}
