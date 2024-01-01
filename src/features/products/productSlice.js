import { createSlice } from "@reduxjs/toolkit";

const getInitialProducts = () => {
  if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify([]))
  const storedproducts = localStorage.getItem('products')
  return JSON.parse(storedproducts)
}

const initialState = {
  products: getInitialProducts(),
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