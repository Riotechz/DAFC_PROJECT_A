export interface RegisterPayload {
    username: string
    password: string
    passwordConfirm: string
    email: string
    mobileNo: string
}


export interface LoginPayload {
    username: string
    password: string
}

export interface UserProfile {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    displayName: string
    mobileNo: string
    telNo: string
    faxNo: string
    position: string
    urlAvatar: string
    userType: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    addedBy: string
    updatedBy: string
    isDeleted: boolean
}