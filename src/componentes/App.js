import "./App.css";
import "./Menu.css";
import "./Filters.css";
import "./Cart.css";
import Filters from "./Filters";
import Products from "./Products";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./productSlice";
import BasicModal from "./Modal";

export default function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(async (response) => {
        const productsResponse = await response.json();

        dispatch(setProducts(productsResponse));
      })
      .catch(() => {
        dispatch(setProducts([]));
      });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Filters />
      <Products />
      <Cart handleOpen={handleOpen} />
      <BasicModal open={open} handleClose={handleClose} />
    </div>
  );
}
