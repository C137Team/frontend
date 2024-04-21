import { Text, Flex } from "@chakra-ui/react"
import { TextWidget } from "../TextWidget"
import { AvatarWidget } from "../AvatarWidget"


export const AccountInfoWidget = () => {
    return (
        <Flex
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <AvatarWidget />

            <TextWidget>
                <Text
                    fontSize="2rem"
                >
                    asdasd
                </Text>
            </TextWidget>
        </Flex>
    )
}
