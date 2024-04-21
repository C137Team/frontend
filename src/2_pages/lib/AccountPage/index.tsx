import { useEffect } from "react"
import { AccountInfoWidget, HeaderWidget } from "../../../3_widgets"
import { checkAuth } from "../../../4_shared/lib/tools/checkAuth"


export const AccountPage = () => {
    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <>
            <HeaderWidget title="Профиль" />
            <AccountInfoWidget />
        </>
    )
}
