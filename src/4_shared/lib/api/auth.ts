import axios from "axios"

import { IFormWidgetLoginData, IFormWidgetRegisterData } from "../../../3_widgets/lib/AuthFormWidget"
import {
    REGISTER_URL,
    LOGIN_URL,
    CONFIRM_EMAIL_URL
} from "../config/APIConstants"


export class Auth {
    // static accessToken = this.Login()

    public static Register = async (data: IFormWidgetRegisterData) => {
        await axios.post(REGISTER_URL, data)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    }

    public static Login = async (data: IFormWidgetLoginData) => {
        const params = new URLSearchParams()

        params.append("username", data.email)
        params.append("password", data.password)

        axios.post(LOGIN_URL, params)
            .then(response => {
                console.log(response)
                localStorage.setItem("accessToken", response.data.access_token)
            })
            .catch(e => {
                console.log(e)
            })
    }

    public static ConfirmEmail = async (confirmation_code: string) => {
        const token = localStorage.getItem("accessToken")
        console.log(`TOKEN: ${token}`)

        const result = await axios.post(CONFIRM_EMAIL_URL, {
            confirmation_code
        },
        {
            headers: {
                // "access_token": this.accessToken
                "Authorization": "Bearer " + token
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })

        return result
    }
}
