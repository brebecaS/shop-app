import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

export default function Product({ product }) {
  const [productQuantity, setProductQuantity] = useState(0);
  const dispatch = useDispatch();

  function handleIncrement() {
    setProductQuantity(productQuantity + 1);
  }

  function handleDecrement() {
    setProductQuantity(productQuantity - 1);
  }

  const shortTitle =
    product.title.slice().length < 30
      ? product.title
      : product.title.slice(0, 30) + "...";

  const [isAddToCardDisabled, setIsAddToCardDisabled] = useState(false);

  return (
    <div className="prod-container">
      <img className="prod-img" src={product.image} alt={"img"} />
      <p className="prod-title">{shortTitle}</p>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>{product.price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{product.rating.rate}</b>
          <small> ({product.rating.count})</small>
        </p>
      </div>
      {/* <button onClick={handleIncrement}>+</button>
      {productQuantity}
      <button onClick={handleDecrement} disabled={productQuantity === 0}>
        -
      </button> */}
      <button
        className="add-btn"
        disabled={isAddToCardDisabled}
        onClick={() => {
          dispatch(addToCart(product));
          setIsAddToCardDisabled(true);
        }}
      >
        Add to cart
      </button>
      {isAddToCardDisabled === true ? (
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeFromCart(product));
            setIsAddToCardDisabled(false);
          }}
        >
          Remove form cart
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
