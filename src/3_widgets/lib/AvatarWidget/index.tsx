import { Box, Flex, Text } from "@chakra-ui/react"
import { bgColor } from "../../../4_shared/lib/config/colors"

export const AvatarWidget = () => {
    return (
        <Flex
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
        >
            {/* REPLACE WITH IMAGE */}
            <Box
                w="17rem"
                h="17rem"
                bg={ bgColor }
                borderRadius={ 1000 }
            />
            <Text
                fontSize="2rem"
                fontWeight="bold"
                align="center"
            >
                { localStorage.getItem("displayName") }
            </Text>
        </Flex>
    )
}
