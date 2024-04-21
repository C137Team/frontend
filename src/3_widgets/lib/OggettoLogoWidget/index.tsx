import { VStack, Text } from "@chakra-ui/react"
import oggettoLogo from "../../../4_shared/lib/assets/img/oggetto/oggetto-logo_tonal-inverse-hor-rus.png"


export const OggettoLogoWidget = () => {
    return (
        <VStack
                w="100%"
                h="15rem"
                alignItems="center"
                justifyContent="center"
                spacing="0"
                position="fixed"
                bottom="0"
            >
                <Text
                    fontSize="0.5rem"
                >
                    Powered by
                </Text>
                <img src={ oggettoLogo } alt="oggettoLogo" width="150" />
            </VStack>
    )
}
