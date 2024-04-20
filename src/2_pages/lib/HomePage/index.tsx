import { HeaderWidget, TextWidget } from "../../../3_widgets"
import { FindButtonWidget } from "../../../3_widgets/lib/FindButtonWidget"


export const HomePage = () => {
    return (
        <>
            <HeaderWidget title={ "Привет, " + "\n" + localStorage.getItem("username") } />
            <TextWidget text="
            Добро пожаловать в Оджетто Connect!

            <br />

            Здесь ты сможешь найти собеседника внутри твоей компании.

            <br />
            <br />

            Скорее нажимай на кнопку, чтобы найти случайного собеседника!
            " />
            <FindButtonWidget />
        </>
    )
}
