import { Box, Button, Flex, FormControl, Input, Text, VStack } from "@chakra-ui/react"
import { useState, FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import API from "../../../4_shared"
import oggettoLogo from "../../../4_shared/lib/assets/img/oggetto/oggetto-logo_tonal-inverse-hor-rus.png"


export type ChangeEvent = React.ChangeEvent<HTMLInputElement>


// widget props model
interface IAuthFormWidgetProps {
    login?: boolean
}


// form data models

// register
export interface IFormWidgetRegisterData {
    email: string
    password: string
    full_name: string
}

// login 
export interface IFormWidgetLoginData {
    email: string
    password: string
}


// component
export const AuthFormWidget: FC<IAuthFormWidgetProps> = (props) => {
    const navigate = useNavigate()
    const login = props.login

    // register form data
    const [ registerFormData, setRegisterFormData ] = useState<IFormWidgetRegisterData>({
        email: "",
        password: "",
        full_name: "",
    })

    // login form data
    const [ loginFormData, setLoginFormData ] = useState<IFormWidgetLoginData>({
        email: "",
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
        if (login) {
            API.Auth.Login(loginFormData)
                .then(() => {
                    API.Auth.GetMePerson().then(() => navigate("/app/home"))
                })
        } else {
            API.Auth.Register(registerFormData).then(() => API.Auth.Login(registerFormData))
            // API.getMyAccount()
            localStorage.setItem("usernameForConfirm", registerFormData.email)
            localStorage.setItem("passwordForConfirm", registerFormData.password)
            // API.Auth.Login(registerFormData)
            navigate("/auth/emailConfirm")
        }
    }


    return (
        <Flex
            w="100%"
            h="100vh"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="black"
        >
            <img
                src={ oggettoLogo }
                alt="oggetto logo"
                style={{
                    minWidth: "",
                    maxWidth: "25rem"
                }}
            />

            <Box
                minW="20rem"
                bg="#28282883"
                p="1rem"
                borderRadius="1rem"
            >
                <FormControl>
                    <VStack gap="1rem" align="center">
                        // Header
                        <Text
                            color="white"
                            fontSize="2rem"
                            fontWeight="bold"
                        >
                            { login ? "Вход" : "Регистрация" }
                        </Text>

                        // Email only if register 
                        { !login && <Input
                            color="white"
                            name="email"
                            type="email"
                            placeholder="Адрес эл. почты"
                            value={ registerFormData.email }
                            onChange={ handleChange }
                            required
                        /> }

                        // Username
                       <Input
                            color="white"
                            name={ login ? "email" : "full_name" }
                            type="username"
                            placeholder={ login ? "Адрес эл. почты" : "Имя" }
                            value={ login ? loginFormData.email : registerFormData.full_name }
                            onChange={ handleChange }
                            required
                        />

                        // Password
                        <Input
                            color="white"
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            value={ login ? loginFormData.password : registerFormData.password }
                            onChange={ handleChange }
                            required
                        />

                        // Link to login/register page
                        <Link to={ login ? "../register" : "../login" }>
                            <Text color="white">
                                { login ? "Нет аккаунта? Зарегистрироваться" : "Есть аккаунт? Войти" }
                            </Text>
                        </Link>

                        // Submit
                        <Button
                            colorScheme="yellow"
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
