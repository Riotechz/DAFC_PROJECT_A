import { LoginPayload, RegisterPayload } from '@/models'
import axiosClient from './axios-client'

export const authApi = {
    register(payload: RegisterPayload) {
        console.log(payload)
        return axiosClient.post('/admin/auth/register', payload)
    },

    login(payload: LoginPayload) {
        console.log(payload)
        return axiosClient.post('/admin/auth/login', payload)
    },

    logout() {
        return axiosClient.post('/admin/logout')
    },

    getProfile() {
        return axiosClient.get('/client//v1/user/share-profile/')
    },
}