import Product from "./Product";

const Products = ({ products, cartItems, addProductToCart, category }) => {
  const filteredProducts =
    category === ""
      ? products
      : products.filter((product) => product.category === category);

  const productsElements = filteredProducts.map((product) => (
    <Product
      cartItems={cartItems}
      key={product.id}
      addProductToCart={addProductToCart}
      product={product}
    />
  ));
  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{productsElements}</div>
    </div>
  );
};

export default Products;
