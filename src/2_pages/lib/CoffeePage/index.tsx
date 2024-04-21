import { Box } from "@chakra-ui/react"
import { CoffeeWidget, HeaderWidget } from "../../../3_widgets"
import { useEffect } from "react"
import { checkAuth } from "../../../4_shared/lib/tools/checkAuth"


export const CoffeePage = () => {
    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <>
            <HeaderWidget title="Встреча" />
            <CoffeeWidget />
            <Box h="5rem" />
        </>
    )
}
