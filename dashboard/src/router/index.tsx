import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/loginPage";
import SignUpPage from "../pages/auth/signUpPage";
import PageNotFound from "../pages/pageNotFound";
import DashboardPage from "../pages/dashboard";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import UserList from "../pages/user/list";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<GuestGuard><LoginPage /></GuestGuard>} />
                <Route path="/auth/sign-up" element={<GuestGuard><SignUpPage /></GuestGuard>} />
                <Route path="/" element={<AuthGuard><DashboardPage/></AuthGuard>}/>
                <Route path="/user/list" element={<AuthGuard><UserList/></AuthGuard>}/>
                <Route path="/user/:id" element={<AuthGuard><DashboardPage/></AuthGuard>}/>
                <Route path="/user/:id/edit" element={<AuthGuard><DashboardPage/></AuthGuard>}/>
                <Route path="/position/list" element={<AuthGuard><DashboardPage/></AuthGuard>}/>
                <Route path="/position/id" element={<AuthGuard><DashboardPage/></AuthGuard>}/>
                <Route path="/position/edit" element={<AuthGuard><DashboardPage/></AuthGuard>}/>
                <Route path="/position/eid" element={<AuthGuard><DashboardPage/></AuthGuard>}/>

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router