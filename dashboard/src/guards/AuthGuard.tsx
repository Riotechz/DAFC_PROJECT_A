import { PropsWithChildren } from "react"
import useAuth from "../hooks/useAuth"
import { Navigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
const AuthGuard = ({children} : PropsWithChildren ) => {
    const { isInitialized, isAuthenticated  } = useAuth()

    if (!isInitialized) return (<>Loading</>)
    if (!isAuthenticated) return (<Navigate to="/auth/login" />)

    return (<MainLayout>{children}</MainLayout>)
};

export default AuthGuard