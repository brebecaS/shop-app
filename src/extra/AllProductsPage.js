import "./App.css";
import "./Menu.css";
import Cart from "../Cart";
import Filters from "../Filters";
import Product from "./Product";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function AllProductsPage() {
  const [queryParams, setQueryParams] = useSearchParams();
  const queryParamCategory = queryParams.get("category");

  const [prod, setProd] = useState([]);
  const [cartItems, setcartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(queryParamCategory);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((response2) => {
        setProd(response2);
      })
      .catch((err) => console.log(err));
  }, []);

  const products = prod
    .filter(
      (product) => !selectedCategory || product.category === selectedCategory
    )
    .map((product) => {
      return (
        <Product
          id={product.id}
          key={product.image}
          img={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating.rate}
          cartItems={cartItems}
          setcartItems={setcartItems}
        />
      );
    });

  return (
    <>
      <div className="wrapper">
        <Filters products={prod} setSelectedCategory={setSelectedCategory} />

        <div>
          <h1>Products</h1>
          {/* <div className="found">
            <p>3 products for selected category</p>
          </div> */}

          <div className="prod-grid">{products}</div>
        </div>

        <Cart cartItems={cartItems} />
      </div>
    </>
  );
}

export default AllProductsPage;
