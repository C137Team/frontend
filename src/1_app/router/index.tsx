import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage, NotFoundPage } from "../../2_pages"

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
            <Route path="app">
                // routes
            </Route>

            <Route path="*" element={ <NotFoundPage /> } />
        </Route>
        </Routes>
        </BrowserRouter>
    )
}
