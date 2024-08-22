import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "./cartSlice";

export default function Product({ product }) {
  const shortTitle =
    product.title.slice().length < 30
      ? product.title
      : product.title.slice(0, 30) + "...";

  const [isAddToCardDisabled, setIsAddToCardDisabled] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

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
      <button>+</button>
      {0}
      <button>-</button>
      {/* <button
        className="add-btn"
        disabled={isAddToCardDisabled}
        onClick={() => {
          dispatch(setCart(cart + 1));
          setIsAddToCardDisabled(!isAddToCardDisabled);
        }}
      >
        Add to cart
      </button> */}
      {/* {isAddToCardDisabled === true ? (
        <button className="remove-btn">Remove form cart</button>
      ) : (
        <></>
      )} */}
    </div>
  );
}
