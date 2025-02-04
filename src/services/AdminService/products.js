import instance from "../../api/axios-customers"

export const addNewProduct = (data) => {
    return instance.post('/product/add-product', data)
}