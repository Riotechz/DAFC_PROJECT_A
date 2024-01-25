import axiosClient from './axios-client'

export const userApi = {

    getShareProfile(id: string): Promise<any> {
        return axiosClient.get(`/client/v1/user/share-profile/${id}`)
    },
}