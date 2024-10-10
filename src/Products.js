import Product from "./Product";

const Products = () => {
  const products = [...new Array(10)].map((product, index) => {
    return <Product key={index} />;
  });

  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
};

export default Products;
