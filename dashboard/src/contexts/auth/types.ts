import { User } from "../../models"

export interface AuthState {
    isAuthenticated?: boolean
    isInitialized?: boolean
    user: User | null
}