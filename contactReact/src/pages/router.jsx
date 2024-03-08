import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from './profile'
import HomePage from './home'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/profile/:username' element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers