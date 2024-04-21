import axios from "axios";
import { Auth } from "./auth";
import {
	GET_MY_MEETING_URL,
	MYACCOUNT_URL,
	START_WANDER_URL
} from "../config/APIConstants";


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

	public static StartWander = async () => {
		const token = localStorage.getItem("accessToken")

		await axios.post(START_WANDER_URL,
		{},
		{
			headers: {
                "Authorization": "Bearer " + token
            }
		})
		.then(response => response)
		.catch(e => console.log(e))
	}

	public static GetMyMeeting = async () => {
		const token = localStorage.getItem("accessToken")

		return await axios.get(GET_MY_MEETING_URL,
		{
			headers: {
                "Authorization": "Bearer " + token
            }
		})
		.then(response => {
			response
		})
		.catch(e => console.log(e))
	}
}
