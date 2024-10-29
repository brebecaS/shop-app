import CartStyle from "./Cart.module.css";
import { useContext } from "react";
import { CartContext as NewNameForCategoryContext } from "./App";

const Cart = () => {
  const { cartItems: newCartItemsName } = useContext(NewNameForCategoryContext);

  return (
    <div className={CartStyle["cart-wrapper"]}>
      <button
        className={CartStyle.cart}
        onClick={() => {
          alert(
            "Cart Items: " +
              newCartItemsName.map((product) => product.title).join(", ")
          );
        }}
      >
        <div className={CartStyle.content}>
          <div className={CartStyle.quantity}>{newCartItemsName.length}</div>
        </div>
      </button>
    </div>
  );
};
export default Cart;
