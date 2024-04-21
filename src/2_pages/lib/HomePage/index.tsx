import { Text } from "@chakra-ui/react"
import { HeaderWidget, TextWidget } from "../../../3_widgets"
import { FindButtonWidget } from "../../../3_widgets" 
import { OggettoLogoWidget } from "../../../3_widgets"


export const HomePage = () => {
    return (
        <>
            <HeaderWidget title={ "Привет, " + "\n" + localStorage.getItem("username") } />
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
