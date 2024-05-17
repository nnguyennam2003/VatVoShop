import { createAction } from "@reduxjs/toolkit";

const addToCart = createAction("cart/Add")
const removeToCart = createAction("cart/Delete")
const updateQuantity = createAction("cart/Quantity")

export { addToCart, removeToCart, updateQuantity }
