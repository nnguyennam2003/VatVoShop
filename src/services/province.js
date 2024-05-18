import axios from "axios"


const getAllCity = () => {
    return axios.get('https://vapi.vnappmob.com/api/province')
}

const getAllDistrict = (cityId) => {
    return axios.get(`https://vapi.vnappmob.com/api/province/district/${cityId}`)
}

const getAllWard = (districtId) => {
    return axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
}

export { getAllCity, getAllDistrict, getAllWard }