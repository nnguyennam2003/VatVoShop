import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        ListCart: []
    },
    reducers: {
        addToCart: (state, action) => {
          const product = state.ListCart.findIndex((prev) => prev.id === action.payload.id && prev.size === action.payload.size)
          if (product === -1) {
            state.ListCart.unshift({...action.payload, quantity: action.payload.quantity, size: action.payload.size})
          } else {
            state.ListCart[product].quantity += 1;
          }
        },

        removeToCart: (state, action) => {
            const productRemove = action.payload.id
            const updateListCart = state.ListCart.filter((item) => item.id !== productRemove)
            return { ...state, ListCart: updateListCart}
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
  
  // Action creators are generated for each case reducer function
  export const { addToCart, removeToCart, updateQuantity } = cartSlice.actions
  
  export default cartSlice.reducer