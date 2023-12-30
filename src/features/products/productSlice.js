import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: ''
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload
    }

  }
})

export const { getProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;