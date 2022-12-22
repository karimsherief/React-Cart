import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ProductSlice from "./slices/ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
  },
});
