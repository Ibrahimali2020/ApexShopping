import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "../../helper";
import { toast } from "react-toastify";


const initialState = {
  cartProducts: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartProducts.push(action.payload)
      showNotification('Item added successfuly!')

    },
    removeFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload)
      showNotification('Item removed successfuly!')
    },
    clearAllItems(state) {
      state.cartProducts = []
    }
  }
})
export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions
export default cartSlice.reducer;