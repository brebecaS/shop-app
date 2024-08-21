export default function Cart({ cart }) {
  return (
    <div className="cart-wrapper">
      <button className="cart">
        <div className="content">
          {/* display redux cart state */}
          <div className="quantity">{cart}</div>
        </div>
      </button>
    </div>
  );
}
