import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const { title, image, category, rating, price } = product;

  const isProductInCart = cartItems.find((item) => item.title === title);
  "".slice();
  const productName = title.length > 20 ? title.slice(0, 20) + "..." : title;

  return (
    <div className="prod-container">
      <img className="prod-img" src={image} alt={"img"} />
      <p className="prod-title">{productName}</p>
      <p className="prod-category">{category}</p>
      <div className="price-container">
        <p>
          <small>$</small>
          <b>{price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{rating.rate}</b>
        </p>
      </div>
      <button
        className="add-btn"
        disabled={isProductInCart}
        onClick={() => {
          dispatch(addToCart(product));
          //   setCartItems((prevCartItems) => [...prevCartItems, product]);
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
