import axiosClient from "./axiosClient";

const BASE_URL = 'http://localhost:5000'

class HandlePost {
    static getPost = async (url: string) => {
        return axiosClient.get(BASE_URL + url)
    }

    static createUserAccount = async (url: string) => {
        return axiosClient.post(BASE_URL + url, {
            "username": "huuuadc55",
            "password": "12345",
            "email": "huuuadc5@gmail.com",
            "mobileNo": "0326473067"
        })
    }
}

// const HandlePosts = new HandlePost()

export default HandlePost