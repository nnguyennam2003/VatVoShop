import axios from "axios"


const getAllCity = () => {
    return axios.get('https://open.oapi.vn/location/provinces?page=0&size=100')
}

const getAllDistrict = (cityId) => {
    return axios.get(`https://open.oapi.vn/location/districts/${cityId}`)
}

const getAllWard = (districtId) => {
    return axios.get(`https://open.oapi.vn/location/wards/${districtId}`)
}

export { getAllCity, getAllDistrict, getAllWard }