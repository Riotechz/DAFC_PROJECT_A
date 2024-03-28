import { LoginPayload, User } from "../models";
import axiosClient from "./axiosClient";

export const USER: User= {
    id: 111,
    username: 'huuuadc',
    email: 'huuuadc@gmail.com',
    firstName: 'tran',
    lastName: 'chi',
    displayName: 'chi huu',
    mobileNo: '0326473067',
    telNo: '0326473067',
    faxNo: '0326473067',
    position: 'IT Project Development',
    urlAvatar: 'ABC',
    userType: 1,
    isActive: true,
    createdAt: '2023-11-11',
    updatedAt: '2023-11-11',
    addedBy: '2023-11-11',
    updatedBy: '2023-11-11',
    isDeleted: false,
}

const authApi = {
    
    loginApi : async (data:LoginPayload)=>{
        const url = '/api/admin/auth/login'
        const response = await axiosClient.post(url,data)
        const User = response.data.data
        return {
            accessToken: User.token,
            user: User
        };
    },

    getProfile : async()=>{
        const url = '/api/admin/user/me'
        const response = await axiosClient.get(url)
        const User = response.data.data
        return User;
    }


}

export default authApi