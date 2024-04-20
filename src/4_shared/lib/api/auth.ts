import axios from "axios"

import { REGISTER_URL, LOGIN_URL } from "../config/APIConstants"
import { IFormWidgetLoginData, IFormWidgetRegisterData } from "../../../3_widgets/lib/AuthFormWidget"


export class Auth {

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
            })
            .catch(e => {
                console.log(e)
            })
    }
}
