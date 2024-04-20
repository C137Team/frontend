import axios from "axios";
import { Auth } from "./auth";
import { MYACCOUNT_URL } from "../config/APIConstants";


export class API {
	static Auth = Auth

	public static getMyAccount = () => {
		const accessToken = localStorage.getItem("accessToken")
		console.log(accessToken)

		axios.get(MYACCOUNT_URL, {
			headers: {
				"Authorization": "Bearer " + accessToken
			}
		})
			.then(response => {
				localStorage.setItem("fullName", response.data.full_name)
				localStorage.setItem("displayText", response.data.person)
			})
			.catch(e => {
				console.log(e)
			})
	}
}
