import CartStyle from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={CartStyle["cart-wrapper"]}>
      <button
        className={CartStyle.cart}
        onClick={() => {
          alert(
            "Cart Items: " +
              props.cartItems.map((product) => product.name).join(", ")
          );
        }}
      >
        <div className={CartStyle.content}>
          <div className={CartStyle.quantity}>{props.cartItems.length}</div>
        </div>
      </button>
    </div>
  );
};
export default Cart;
