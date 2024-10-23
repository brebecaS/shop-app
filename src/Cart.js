import CartStyle from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={CartStyle["cart-wrapper"]}>
      <button className={CartStyle.cart}>
        <div className={CartStyle.content}>
          <div className={CartStyle.quantity}>{props.numberOfCartItems}</div>
        </div>{" "}
      </button>
    </div>
  );
};
export default Cart;
