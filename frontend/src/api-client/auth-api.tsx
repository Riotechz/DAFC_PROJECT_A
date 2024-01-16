import { LoginPayload, RegisterPayload } from '@/models'
import axiosClient from './axios-client'

export const authApi = {
    register(payload: RegisterPayload) {
        console.log(payload)
        return axiosClient.post('/auth/register', payload)
    },

    login(payload: LoginPayload) {
        console.log(payload)
        return axiosClient.post('/auth/login', payload)
    },

    logout() {
        return axiosClient.post('/logout')
    },

    getProfile() {
        return axiosClient.get('/profile')
    },
}