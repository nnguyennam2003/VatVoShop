import instance from "../api/axios-customers"

const getPlusProduct = () => {
    return instance.get('plus-version')
}

export { getPlusProduct }