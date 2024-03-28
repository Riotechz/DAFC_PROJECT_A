import { PropsWithChildren } from "react"
import useAuth from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
const GuestGuard = ({children} : PropsWithChildren ) => {
    const { isInitialized, isAuthenticated  } = useAuth()
    
    if (!isInitialized) return (<>Loading</>)
    if (isAuthenticated) return (<Navigate to="/" />)

    return (<>{children}</>)
};

export default GuestGuard