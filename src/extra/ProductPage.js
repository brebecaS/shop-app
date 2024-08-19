import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productID}`)
      .then((response) => response.json())
      .then((response2) => setProduct(response2));
  }, [params.productID]);

  return (
    <div className="prod-container2">
      <img className="prod-img" src={product.image} alt={"img"} />
      <p className="prod-title">{product.title}</p>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>{product.price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{product?.rating?.rate}</b>
        </p>
      </div>
      {/* add to redux state */}
      <button
        onClick={() => {
          //   props.setcartItems(props.cartItems + 1);
          //   setdisableBut(true);
        }}
      >
        Add to cart
      </button>
      {/* <button className="remove-btn">Already in cart</button> */}
    </div>
  );
};
export default ProductPage;
