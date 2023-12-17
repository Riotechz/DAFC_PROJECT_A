import axios from 'axios'
import { error } from 'console'
import { config } from 'process'

const axiosClient = axios.create()

axiosClient.interceptors.request.use(async (config: any) => {
    config.headers = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...config.headers,
    },

        config.data

    return config;
})


axiosClient.interceptors.response.use((response) => {

    if (response.status === 200 && response.data) {
        return response.data
    }

    return response;
},

    error => {
        console.warn(`Lỗi gọi api, ${error.message}`)
    }
)


export default axiosClient