import Product from "./Product";

const Products = (props) => {
  const filteredProducts =
    props.category === ""
      ? props.products
      : props.products.filter((product) => product.category === props.category);

  const productsElements = filteredProducts.map((product, index) => (
    <Product
      cartItems={props.cartItems}
      key={product.name}
      addProductToCart={props.addProductToCart}
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
