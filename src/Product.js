import { useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [disableBut, setdisableBut] = useState(false);

  return (
    <div className="prod-container">
      <Link to={`/products/${props.id}`}>
        <img className="prod-img" src={props.img} alt={"img"} />
        <p className="prod-title">{props.title}</p>
      </Link>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>{props.price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{props.rating}</b>
        </p>
      </div>
      {/* add to redux state */}
      <button
        className="add-btn"
        disabled={disableBut}
        onClick={() => {
          props.setcartItems(props.cartItems + 1);
          setdisableBut(true);
        }}
      >
        Add to cart
      </button>
      {/* <button className="remove-btn">Already in cart</button> */}
    </div>
  );
};
export default Product;
