import { useState, useEffect } from "react";

const useLoadProducts = (numberOfProducts, order) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((decodedResponse) => setProducts(decodedResponse));
  }, [numberOfProducts, order]);

  return products;
};

export default useLoadProducts;
