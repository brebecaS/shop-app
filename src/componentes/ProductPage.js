import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  //1. accesam id-ul produsului
  //2. facem fetch catre server/api pentru a prelua datele produsului
  //3. afisam datele produsului

  const params = useParams();
  const productId = params.productId;
  const [products, setProducts] = useState([]);
  const currentProducts = products.find(
    (product) => product.id === Number(productId)
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/").then(async (response) => {
      const productsResponse = await response.json();
      setProducts(productsResponse);
    });
  }, []);

  console.log(products);
  return <h1>{currentProducts?.title}</h1>;
};

export default ProductPage;
