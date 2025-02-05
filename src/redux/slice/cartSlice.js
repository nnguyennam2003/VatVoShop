import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    ListCart: []
  },
  reducers: {
    setCart: (state, action) => {
      state.ListCart = action.payload;
    },
    addToCart: (state, action) => {
      const product = state.ListCart.findIndex((prev) => prev.id === action.payload.id && prev.size === action.payload.size)
      if (product === -1) {
        state.ListCart.unshift({ ...action.payload, quantity: action.payload.quantity, size: action.payload.size })
      } else {
        state.ListCart[product].quantity += 1;
      }
    },
    removeToCart: (state, action) => {
      const { productId, size } = action.payload;
      state.ListCart = state.ListCart.filter(
        (item) => !(item.productId === productId && item.size === size)
      )
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.ListCart.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    }
  },
})

export const { setCart, addToCart, removeToCart, updateQuantity } = cartSlice.actions

export default cartSlice.reducer
