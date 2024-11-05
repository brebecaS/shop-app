import { useSelector } from "react-redux";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default CartPage;
