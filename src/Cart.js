const Cart = (props) => {
  return (
    <div className="cart-wrapper">
      <button className="cart">
        <div className="content">
          <div className="quantity">{props.numberOfCartItems}</div>
        </div>
      </button>
    </div>
  );
};
export default Cart;
