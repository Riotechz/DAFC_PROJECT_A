export interface LoginPayload {
    username: string
    password: string
}

export interface UserProfile {
    id: number
    username: string
    email: string
    mobileNo: string
    userType: number
    isActive: boolean
    isDeleted: boolean
}

export interface RegisterPayload {
    username: string
    email: string
    mobileNo: string
    password: string
    passwordConfirm: string
}


export function index() {
    return 'auth'
}