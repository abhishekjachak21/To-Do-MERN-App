import axios from "axios"
const instance = axios.create({
    baseURL:"https://todoappv3be.onrender.com/api/"
})
export default instance