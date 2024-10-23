import { useState } from "react";
const Product = (props) => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const isProductInCart = props.cartItems.find(
    (item) => item.name === props.product.name
  );

  return (
    <div className="prod-container">
      <img
        className="prod-img"
        src={
          "https://user-images.githubusercontent.com/42506001/221354918-01bf0e89-48be-4df7-85bb-cdf5d0136f2a.png"
        }
        alt={"img"}
      />
      <p className="prod-title">{props.product.name}</p>
      <p className="prod-category">{props.product.category}</p>
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
      <button
        className="add-btn"
        disabled={isProductInCart}
        onClick={() => {
          props.addProductToCart((prevCartItems) => [
            ...prevCartItems,
            props.product,
          ]);
        }}
      >
        Add to cart
      </button>
      {/* <button
        onClick={() => {
          setNumberOfItems(numberOfItems + 1);
          props.updateCartValue((prevNumber) => prevNumber + 1);
        }}
      >
        +
      </button>
      {numberOfItems}
      <button
        disabled={!numberOfItems}
        onClick={() => {
          setNumberOfItems(numberOfItems - 1);
          props.updateCartValue((prevNumber) => prevNumber - 1);
        }}
      >
        -
      </button> */}
    </div>
  );
};

export default Product;
