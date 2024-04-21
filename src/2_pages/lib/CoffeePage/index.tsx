import { Box } from "@chakra-ui/react"
import { CoffeeWidget, HeaderWidget } from "../../../3_widgets"


export const CoffeePage = () => {
    return (
        <>
            <HeaderWidget title="Встреча" />
            <CoffeeWidget />
            <Box h="5rem" />
        </>
    )
}
