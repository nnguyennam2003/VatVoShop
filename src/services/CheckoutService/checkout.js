import instance from "../../api/axios-customers"

export const checkout = (dataInfo) => {
    return instance.post('/order/checkout', dataInfo)
}