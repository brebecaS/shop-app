import Product from "./Product";

export default function Products({ productsList }) {
  const products = productsList.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
}
