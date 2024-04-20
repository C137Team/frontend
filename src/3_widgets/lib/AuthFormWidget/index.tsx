import { Box, Button, Flex, FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { useState, FC } from "react"
import { Link } from "react-router-dom"
import API from "../../../4_shared"


type ChangeEvent = React.ChangeEvent<HTMLInputElement>


// widget props model
interface IAuthFormWidgetProps {
    login?: boolean
}


// form data models
export interface IFormWidgetRegisterData {
    email: string
    password: string
    full_name: string
}

export interface IFormWidgetLoginData {
    username: string
    password: string
}


// component
export const AuthFormWidget: FC<IAuthFormWidgetProps> = (props) => {
    const login = props.login

    // register form data
    const [ registerFormData, setRegisterFormData ] = useState<IFormWidgetRegisterData>({
        email: "",
        password: "",
        full_name: "",
    })

    // login form data
    const [ loginFormData, setLoginFormData ] = useState<IFormWidgetLoginData>({
        username: "",
        password: "",
    })


    // changing data
    const handleChange = (event: ChangeEvent) => {
        const { name, value } = event.target

        if (login) {
            setLoginFormData(prevData => ({...prevData, [name]: value}))
            console.log(loginFormData)
        } else {
            setRegisterFormData(prevData => ({...prevData, [name]: value}))
            console.log(registerFormData)
        }
    }

    // submitting data
    const handleSubmit = () => {
        // event.preventDefault()
        console.log("submit form")

        if (login) {
            API.Auth.Login(loginFormData)
        } else {
            API.Auth.Register(registerFormData)
        }
    }


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
                        // Header
                        <Text
                            fontSize="2rem"
                            fontWeight="bold"
                        >
                            { login ? "Вход" : "Регистрация" }
                        </Text>

                        // Email only if register 
                        { !login && <Input
                            name="email"
                            type="email"
                            placeholder="Адрес эл. почты"
                            value={ registerFormData.email }
                            onChange={ handleChange }
                            required
                        /> }

                        // Username
                       <Input
                            name={ login ? "username" : "full_name" }
                            type="username"
                            placeholder="Имя"
                            value={ login ? loginFormData.username : registerFormData.full_name }
                            onChange={ handleChange }
                            required
                        />

                        // Password
                        <Input
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            value={ login ? loginFormData.password : registerFormData.password }
                            onChange={ handleChange }
                            required
                        />

                        // Link to login/register page
                        <Link to={ login ? "../register" : "../login" }>
                            { login ? "Нет аккаунта? Зарегистрироваться" : "Есть аккаунт? Войти" }
                        </Link>

                        // Submit
                        <Button
                            colorScheme="blue"
                            w="100%"
                            onClick={ () => handleSubmit() }
                        >
                            { login ? "Войти" : "Зарегистрироваться" }
                        </Button>
                    </VStack>
                </FormControl>
            </Box>
        </Flex>
    )
}
