import instance from "../../api/axios-customers"

export const addToCartBackend = (data) => {
    return instance.post('/cart/add-to-cart', data)
}

export const fetchCart = (userId) => {
    return instance.get(`/cart/list-cart/${userId}`)
}

export const removeFromCart = (data) => {
    return instance.post('/cart/remove-cart', data)
}

export const updateQuantityCart = (data) => {
    return instance.put('/cart/update-cart-quantity', data)
}



