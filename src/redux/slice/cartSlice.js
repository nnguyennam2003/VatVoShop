import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        ListCart: []
    },
    reducers: {
        addToCart: (state, action) => {
          const product = state.ListCart.findIndex((prev) => prev.id === action.payload.id)
            
          if (product === -1) {
            state.ListCart.push({...action.payload, quantity: 1})
          } else {
            state.ListCart[product].quantity += 1;
          }
        },
        removeToCart: (state, action) => {
            const productRemove = action.payload.id
            const updateListCart = state.ListCart.filter((item) => item.id !== productRemove)
            return { ...state, ListCart: updateListCart}
        },
      },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart, removeToCart } = cartSlice.actions
  
  export default cartSlice.reducer