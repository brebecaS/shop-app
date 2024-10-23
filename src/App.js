import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import "./App.css";

import Products from "./Products";
import CategoriesFilters from "./CategoriesFilters";
import Cart from "./Cart";

function App() {
  const products = [...new Array(10)].map((product, index) => (
    <div className="prod-container" key={index}>
      <img
        className="prod-img"
        src={
          "https://user-images.githubusercontent.com/42506001/221354918-01bf0e89-48be-4df7-85bb-cdf5d0136f2a.png"
        }
        alt={"img"}
      />
      <p className="prod-title">Product name</p>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>99</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>3.9</b>
        </p>
      </div>
      <button className="add-btn" disabled={false}>
        Add to cart
      </button>
    </div>
  ));

  return (
    <div className="wrapper">
      <CategoriesFilters />

      <div>
        <h1>Products</h1>

        <div className="prod-grid">{products}</div>
      </div>

      <div className="cart-wrapper">
        <button className="cart">
          <div className="content">
            <div className="quantity">0</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
