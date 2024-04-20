import axios from "axios"

import { REGISTER_URL, LOGIN_URL, CONFIRM_EMAIL_URL } from "../config/APIConstants"
import { IFormWidgetLoginData, IFormWidgetRegisterData } from "../../../3_widgets/lib/AuthFormWidget"


export class Auth {
    static accessToken = localStorage.getItem("accessToken")

    public static Register = (data: IFormWidgetRegisterData) => {
        axios.post(REGISTER_URL, data)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })
    }

    public static Login = (data: IFormWidgetLoginData) => {
        const params = new URLSearchParams()

        params.append("username", data.username)
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

    public static ConfirmEmail = (confirmation_code: string) => {
        axios.post(CONFIRM_EMAIL_URL, {
            confirmation_code
        },
        {
            headers: {
                // "access_token": this.accessToken
                "Authorization": "Bearer " + this.accessToken
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            })

        console.log(this.accessToken)
    }
}
