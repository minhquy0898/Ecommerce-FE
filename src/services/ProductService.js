import axios from "axios"

export const getAllProduct = async () => {
    const res = await axios.get(`http://localhost:3000/api/product/get-all`)
    return res.data
}
