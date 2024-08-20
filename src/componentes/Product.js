import { useContext, useState } from "react";
import { ChangeContext } from "./App";

export default function Product({ product }) {
  const shortTitle =
    product.title.slice().length < 30
      ? product.title
      : product.title.slice(0, 30) + "...";

  const { setCart } = useContext(ChangeContext);
  const [isDisabled, setIsDisabled] = useState(false);

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
      {/* add to redux state */}
      <button
        className="add-btn"
        disabled={isDisabled}
        onClick={() => {
          setCart((prevCart) => prevCart + 1);
          setIsDisabled(!isDisabled);
        }}
      >
        Add to cart
      </button>
      {/* <button className="remove-btn">Already in cart</button> */}
    </div>
  );
}
