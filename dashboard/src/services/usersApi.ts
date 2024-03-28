import { LoginPayload, User } from "../models";
import axiosClient from "./axiosClient";

const userApi = {
    
    getUsers : async (data:LoginPayload)=>{
        const url = '/api/admin/auth/login'
        const response = await axiosClient.post(url,data)
        const User = response.data.data
        return {
            accessToken: User.token,
            user: User
        };
    },

    getUserById : ()=>{
        return '';
    }


}

export default userApi