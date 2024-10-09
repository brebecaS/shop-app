import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import "./App.css";

function App() {
  const products = [...new Array(10)].map((product) => {
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
  });

  return (
    <>
      <div className="wrapper">
        <div className="filters">
          <div>
            <h4>Choose a category:</h4>
            <div className="category">
              <button className="filter-btn">category1</button>
            </div>
            <div className="category">
              <button className="filter-btn">category2</button>
            </div>
            <div className="category">
              <button className="filter-btn">category3</button>
            </div>
          </div>
        </div>

        <div>
          <h1>Products</h1>

          <div className="prod-grid">{products}</div>
        </div>

        <div className="cart-wrapper">
          <button className="cart">
            <div className="content">
              <div className="quantity">0</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
