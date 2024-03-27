import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/loginPage";
import SignUpPage from "../pages/auth/signUpPage";
import PageNotFound from "../pages/pageNotFound";
import DashboardPage from "../pages/dashboard";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/sign-up" element={<SignUpPage />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router