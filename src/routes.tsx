import { Route, Routes } from "react-router-dom"
import LandingPage from "components/LandingPage"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
    )
}