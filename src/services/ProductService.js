import axios from "axios"

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
    console.log('res.data', res.data)
    return res.data
}

