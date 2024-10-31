import CartStyle from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className={CartStyle["cart-wrapper"]}>
      <button
        className={CartStyle.cart}
        onClick={() => {
          alert(
            "Cart Items: " +
              cartItems.map((product) => product.title).join(", ")
          );
        }}
      >
        <div className={CartStyle.content}>
          <div className={CartStyle.quantity}>{cartItems.length}</div>
        </div>
      </button>
    </div>
  );
};
export default Cart;
