import { Box, Button, FormControl, Input, VStack } from "@chakra-ui/react"
import { useState } from "react"
import API from "../../../4_shared"


export const EmailConfirmationWidget = () => {
    const [ code, setCode ] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)

    const handleSubmit = () => {
        console.log(code)

        API.Auth.ConfirmEmail(code).then(result => console.log(`RESULT: ${result}`))
    }

    return (
        <Box w="100%" p="1rem">
            <FormControl>
                <VStack>
                    <Input
                        color="white"
                        name="code"
                        type="number"
                        placeholder="Код"
                        value={ code }
                        onChange={ handleChange }
                        required
                    />
                    <Button
                        w="100%"
                        colorScheme="yellow"
                        onClick={ () => handleSubmit() }
                    >
                        Подтвердить
                    </Button>
                </VStack>
            </FormControl>
        </Box>
    )
}
