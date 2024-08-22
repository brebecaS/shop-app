import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: 0,
  },

  reducers: {
    setCart: (state, action) => {
      state.cart += action.payload;
    },
    incrementCart: (state) => {
      state.cart += 1;
    },
    decrementCart: (state) => {
      state.cart -= 1;
    },
  },
});

export const { setCart, incrementCart, decrementCart } = cartSlice.actions;

export default cartSlice.reducer;
