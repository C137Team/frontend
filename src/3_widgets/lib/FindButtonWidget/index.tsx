import { Button, Flex, } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API from "../../../4_shared";

export const FindButtonWidget = () => {
    const navigate = useNavigate()

    const handleStartWander = () => {
        API.StartWander()
            .then(() => navigate("../coffee"))
    }

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

                onClick={ () => handleStartWander() }
            >
                Найти собеседника
            </Button>
        </Flex>
    )
}
