import Product from "./Product";

const Products = (props) => {
  const products = [...new Array(10)].map((product, index) => (
    <Product key={index} updateCartValue={props.setNumberOfCartItems} />
  ));
  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
};

export default Products;
