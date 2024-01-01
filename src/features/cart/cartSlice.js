import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "../../helper";

const getInitialCartProducts = () => {
  if (!localStorage.getItem('cartProducts')) localStorage.setItem('cartProducts', JSON.stringify([]))
  const storedcartProducts = localStorage.getItem('cartProducts')
  return JSON.parse(storedcartProducts)
}


const initialState = {
  cartProducts: getInitialCartProducts()
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