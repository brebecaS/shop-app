import { useSelector } from "react-redux";

export default function Cart({ handleOpen }) {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <div className="cart-wrapper">
      <button className="cart" onClick={handleOpen}>
        <div className="content">
          {/* display redux cart state */}
          <div className="quantity">{cart}</div>
        </div>
      </button>
    </div>
  );
}
