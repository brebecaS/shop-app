import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductPage = () => {
  const params = useParams();
  const productId = params.productId;
  const [currentProducts, setCurrentProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + productId).then(
      async (response) => {
        const productsResponse = await response.json();
        setCurrentProducts(productsResponse);
      }
    );
  }, [productId]);

  return currentProducts && <Product product={currentProducts} />;
};

export default ProductPage;
