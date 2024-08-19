import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import {useEffect} from "react";
// "https://fakestoreapi.com/products/"
export default function App() {
useEffect(()=>{
  fetch("https://fakestoreapi.com/products"). then(async(response)=>
  {
    const productResponse = await response.json();
    console.log(productResponse);
  });

}, []);
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
