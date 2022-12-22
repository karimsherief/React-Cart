import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    return json;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productsSlice.reducer;
