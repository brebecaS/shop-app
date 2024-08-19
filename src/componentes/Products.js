import Product from "./Product";

export default function Products({ productsList }) {
  const products = productsList.map((product, index) => {
    return <Product product={product} index={index} />;
  });

  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
}
