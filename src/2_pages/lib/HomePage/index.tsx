import { Text } from "@chakra-ui/react"
import { HeaderWidget, TextWidget } from "../../../3_widgets"
import { FindButtonWidget } from "../../../3_widgets" 
import { OggettoLogoWidget } from "../../../3_widgets"
import { useEffect } from "react"
import { checkAuth } from "../../../4_shared/lib/tools/checkAuth"


export const HomePage = () => {
    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <>
            <HeaderWidget title={ "Привет, " + "\n" + localStorage.getItem("displayName") } />
            <TextWidget>
                <Text>
                    Добро пожаловать в Оджетто Connect!

                    <br />

                    Здесь ты сможешь найти собеседника внутри твоей компании.

                    <br />
                    <br />

                    Скорее нажимай на кнопку, чтобы найти случайного собеседника!
                </Text>
            </TextWidget>

            <FindButtonWidget />

            <OggettoLogoWidget />
        </>
    )
}
