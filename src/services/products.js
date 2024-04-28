import instance from "../api/axios-customers"

const getAllProduct = () => {
    return instance.get('products')
}

export { getAllProduct }