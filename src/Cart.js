import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart-wrapper">
      <button className="cart">
        <div className="content">
          {/* display redux cart state */}
          <div className="quantity">{props.cartItems}</div>
        </div>
      </button>
    </div>
  );
};
export default Cart;
