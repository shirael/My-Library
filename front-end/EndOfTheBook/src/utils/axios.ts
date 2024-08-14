import axios from "axios";


const url = 'https://localhost:7269/api'
const axiosInstance = axios.create({ baseURL: url })
// export const publicAxiosInstance = axios.create({ baseURL: url })

axiosInstance.interceptors.request.use()
axiosInstance.interceptors.response.use()

export default  axiosInstance;