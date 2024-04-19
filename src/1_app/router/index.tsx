import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BottomNavBarWidget } from "../../3_widgets"

import {
    LoginPage,
    RegisterPage,
    NotFoundPage,
    HomePage,
    CoffeePage,
    AccountPage
} from "../../2_pages"


export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/">
            // auth
            <Route path="auth">
                <Route index path="login" element={ <LoginPage /> } />
                <Route path="register" element={ <RegisterPage /> } />
            </Route>

            // main app
            <Route path="app" element={ <BottomNavBarWidget /> }>
                <Route path="home" element={ <HomePage /> } />
                <Route path="coffee" element={ <CoffeePage /> } />
                <Route path="account" element={ <AccountPage /> } />
            </Route>

            // service
            <Route path="*" element={ <NotFoundPage /> } />
        </Route>
        </Routes>
        </BrowserRouter>
    )
}
