import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Text, VStack } from "@chakra-ui/react"
import { useState, FC } from "react"
import { Link } from "react-router-dom"


interface IAuthFormWidgetProps {
    login?: boolean
}

export const AuthFormWidget: FC<IAuthFormWidgetProps> = (props) => {
    const login = props.login

    const [ username, setUsername ] = useState<string>()
    const [ password, setPassword ] = useState<string>()

    return (
        <Flex
            w="100%"
            h="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                minW="20rem"
                bg="#F9F9F9"
                p="1rem"
                borderRadius="1rem"
            >
                <FormControl>
                    <VStack gap="1rem" align="center">
                        <Text
                            fontSize="2rem"
                            fontWeight="bold"
                        >
                            { login ? "Вход" : "Регистрация" }
                        </Text>

                        <Input
                            placeholder="Имя пользователя"
                            value={ username }
                        />

                        <Input
                            placeholder="Пароль"
                            value={ password }
                        />

                        <Link to={ login ? "../register" : "../login" }>
                            { login ? "Нет аккаунта? Зарегистрироваться" : "Есть аккаунт? Войти" }
                        </Link>

                        <Button colorScheme="blue" w="100%" > { login ? "Войти" : "Зарегистрироваться" } </Button>
                    </VStack>
                </FormControl>
            </Box>
        </Flex>
    )
}
