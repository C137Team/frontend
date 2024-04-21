import { Flex, Button } from "@chakra-ui/react"
import { AvatarWidget } from "../AvatarWidget"
import { IoExitOutline } from "react-icons/io5";


export const AccountInfoWidget = () => {
    return (
        <Flex
            w="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="1rem"
        >
            <AvatarWidget />

            {/* <TextWidget>
                <Text
                    fontSize="2rem"
                >
                    asdasd
                </Text>
            </TextWidget> */}

            <Button colorScheme="yellow" onClick={() => {
                localStorage.removeItem("isAuthed")
                location.reload()
            }} leftIcon={ <IoExitOutline /> }>
                Выйти из аккаунта
            </Button>
        </Flex>
    )
}
