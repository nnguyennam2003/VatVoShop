import instance from "../api/axios-customers"

const getUltraProduct = () => {
    return instance.get('ultra-version')
}

export { getUltraProduct }