import { useContext } from "react"
import { AuthContext } from "../contexts/auth/AuthContext"

const useAuth = () => {
     const context = useContext(AuthContext)

     if (!context){
        throw new Error('Auth context must br inside AuthProvider')
     }

     return context
    
}

export default useAuth;