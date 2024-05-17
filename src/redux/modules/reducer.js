import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeToCart, updateQuantity } from "./actions";

const initialState = {
  ListCart: [],
};

const cartReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(addToCart, (state, action) => {
        const productIndex = state.ListCart.findIndex(
          (item) => item.id === action.payload.id && item.size === action.payload.size
        );
        if (productIndex === -1) {
          state.ListCart.unshift({ ...action.payload, quantity: action.payload.quantity, size: action.payload.size });
        } else {
          state.ListCart[productIndex].quantity += 1;
        }
      })
      .addCase(removeToCart, (state, action) => {
        const { id, size } = action.payload;
        state.ListCart = state.ListCart.filter((item) => item.id !== id || item.size !== size);
      })
      .addCase(updateQuantity, (state, action) => {
        const { id, quantity } = action.payload;
        const product = state.ListCart.find((item) => item.id === id);
        if (product) {
          product.quantity = quantity;
        }
      });
  });

export default cartReducer