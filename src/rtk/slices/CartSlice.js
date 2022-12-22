import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.product.id
      );

      if (!findProduct) {
        const cloneProduct = { ...action.payload.product, quantity: 1 };

        return [...state, cloneProduct];
      }

      findProduct.quantity += action.payload.value;
    },
    deleteFromCart: (state, action) =>
      state.filter((product) => product.id !== action.payload),
    clearCart: () => [],
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
