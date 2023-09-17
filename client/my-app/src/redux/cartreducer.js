import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      console.log(action?.payload);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    remove: (state, action) => {
      console.log(action.payload);
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    reset: (state) => {
      state.products = [];
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;

export default cartSlice.reducer;
