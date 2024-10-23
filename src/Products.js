import Product from "./Product";

const Products = (props) => {
  const productsArray = [
    {
      name: "Product name 1",
      category: "category1",
    },
    {
      name: "Product name 2",
      category: "category2",
    },
    {
      name: "Product name 3",
      category: "category3",
    },
    {
      name: "Product name 4",
      category: "category2",
    },
    {
      name: "Product name 5",
      category: "category2",
    },
    {
      name: "Product name 6",
      category: "category1",
    },

    {
      name: "Product name 7",
      category: "category1",
    },
  ];

  const filteredProducts =
    props.category === ""
      ? productsArray
      : productsArray.filter((product) => product.category === props.category);

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
