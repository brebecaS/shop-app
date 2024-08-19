export default function Products() {
  const products = [...new Array(10)].map((product, index) => {
    return (
      <div className="prod-container" key={index}>
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
        {/* add to redux state */}
        <button className="add-btn" disabled={false}>
          Add to cart
        </button>
        {/* <button className="remove-btn">Already in cart</button> */}
      </div>
    );
  });

  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
}
