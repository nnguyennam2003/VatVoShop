import instance from "../../api/axios-customers"

const getAllProduct = () => {
    return instance.get('/product/products')
}

const getProductById = (productId) => {
    return instance.get(`/product/productDetail/${productId}`)
}

export { getAllProduct, getProductById }