const Product = () => {
  return (
    <div className="prod-container">
      <img
        className="prod-img"
        src={
          "https://user-images.githubusercontent.com/42506001/221354918-01bf0e89-48be-4df7-85bb-cdf5d0136f2a.png"
        }
        alt={"img"}
      />
      <p className="prod-title">Product name</p>

      <div className="price-container">
        <p>
          <small>$</small>
          <b>99</b>
        </p>
        <p style={{ color: "gray" }}>
          <small>rating: </small>
          <b>3.9</b>
        </p>
      </div>
      <button className="add-btn" disabled={false}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
