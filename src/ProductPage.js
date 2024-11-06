import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const isProductInCart = cartItems.find((item) => item.id === product.id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.productId)
      .then((response) => response.json())
      .then((decodedResponse) => {
        setProduct(decodedResponse);
      });
  }, [params.productId]);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="product" />
      <button
        disabled={isProductInCart}
        className="add-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductPage;
