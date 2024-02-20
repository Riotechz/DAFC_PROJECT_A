import { LoginPayload } from '@/models'
import axiosClient from './axios-client'

export const authApi = {
    login(payload: LoginPayload) {
        return axiosClient.post('/admin/auth/login', payload)
    },

    logout() {
        return axiosClient.post('/admin/auth/logout')
    },

    getUserLogin() {
        return axiosClient.get('/admin/auth')
    },
}