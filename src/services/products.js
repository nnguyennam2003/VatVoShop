import instance from "../api/axios-customers"

const getAllProduct = () => {
    return instance.get('products')
}

const getProductById = (productId) => { // Thêm tham số productId
    return instance.get(`products/${productId}`); // Gọi API để lấy thông tin của sản phẩm cụ thể
}

export { getAllProduct, getProductById }