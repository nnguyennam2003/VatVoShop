import instance from "../../api/axios-customers"

export const signup = (email, fullName, phoneNumber, password) => {
    return instance.post('/auth/register', { email, fullName, phoneNumber, password })
}

export const login = (email, password) => {
    return instance.post('/auth/login', { email, password })
}