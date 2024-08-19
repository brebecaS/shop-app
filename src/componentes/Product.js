export default function Product({ product }) {
  return (
    <div className="prod-container">
      <img className="prod-img" src={product.image} alt={"img"} />
      <p className="prod-title">
        {product.title.slice().length < 30
          ? product.title
          : product.title.slice(0, 30) + "..."}
      </p>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>{product.price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{product.rating.rate}</b>
          <small> ({product.rating.count})</small>
        </p>
      </div>
      {/* add to redux state */}
      <button className="add-btn" disabled={false}>
        Add to cart
      </button>
      {/* <button className="remove-btn">Already in cart</button> */}
    </div>
  );
}
