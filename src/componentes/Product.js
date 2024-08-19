export default function Product({ index, product }) {
  return (
    <div className="prod-container" key={index}>
      <img className="prod-img" src={product.image} alt={"img"} />
      <p className="prod-title">{product.title}</p>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>{product.price}</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>{product.rating.rate}</b>
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