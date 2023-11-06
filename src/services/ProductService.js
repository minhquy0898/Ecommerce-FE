import axios from "axios"
import { axiosJwt } from "./UserService"

export const getAllProduct = async () => {
    const res = await axios.get(`http://localhost:3000/api/product/get-all`)
    return res.data
}

export const createProduct = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/product/create`, data)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/product/detail/${id}`)
    return res.data
}

export const updateProduct = async (id, access_token, data) => {
    const res = await axiosJwt.put(`http://localhost:3000/api/product/update/${id}`, data, {
        headers: {
            token: `Beare ${access_token}`,
        }
    })
    return res.data
}

export const deleteProduct = async (id, access_token) => {
    const res = await axiosJwt.delete(`http://localhost:3000/api/product/delete/${id}`, {
        headers: {
            token: `Beare ${access_token}`,
        }
    })
    return res.data
}


