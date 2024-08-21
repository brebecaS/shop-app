import Product from "./Product";
import { useSelector } from "react-redux";

export default function Products({ category }) {
  const productsList = useSelector((state) => state.products.products);

  const filteredProducts = productsList.filter((product) => {
    if (!category) return true;

    if (product.category === category) return true;
    else return false;
  });

  const products = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
}
