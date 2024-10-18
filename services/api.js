import axios from "axios";

const api = axios.create({
    baseURL: 'htttp//localhost:3000'
})

export default api