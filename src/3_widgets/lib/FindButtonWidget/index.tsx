import { Button, Flex, } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const FindButtonWidget = () => {
    const navigate = useNavigate()

    return (
        <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
        >
            <Button
                colorScheme="yellow"
                leftIcon={ <FaSearch /> }
                size="lg"

                onClick={ () => navigate("/app/searchForСompanion") }
            >
                Найти собеседника
            </Button>
        </Flex>
    )
}
