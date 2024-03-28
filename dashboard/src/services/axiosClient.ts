import axios from "axios";
import { BASE_URL_API } from "../configs";

export const accessToken = localStorage.getItem("ACCESS_TOKEN")

axios.interceptors.request.use((config)=>{
return config
},function(error){
  return Promise.reject(error)
})

axios.interceptors.response.use((response)=>{
  return response
}, function (error){
  return Promise.reject(error)
})

const axiosClient = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  }
})



export default axiosClient;