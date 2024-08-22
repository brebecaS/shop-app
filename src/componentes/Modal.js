import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose }) {
  const cart = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-prod2">
              <div>
                <h3>{product.title}</h3>
                <img
                  className="prod-img2"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="price-container">
                <p>
                  <small>$</small>
                  <b>{product.price}</b>
                </p>
              </div>
            </div>
          );
        })}
      </Box>
    </Modal>
  );
}
