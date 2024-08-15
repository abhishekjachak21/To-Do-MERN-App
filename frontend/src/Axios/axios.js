import axios from "axios"
const instance = axios.create({
    // baseURL:"https://todoappv3be.onrender.com"
    baseURL:"http://localhost:8001"
})
export default instance