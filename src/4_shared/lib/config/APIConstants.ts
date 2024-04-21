const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const V = "/v1"
const ME = "/me"
const ACCOUNT = "/account"
const IDENTIFICATION = "/identification"
const MEETING = "/meeting"

const BASIC_URL = BASE_URL + V

export const REGISTER_URL = BASIC_URL + "/register"
export const LOGIN_URL = BASIC_URL + "/token"
export const MYACCOUNT_URL = BASIC_URL + ME + ACCOUNT
export const CONFIRM_EMAIL_URL = BASIC_URL + ME + ACCOUNT + IDENTIFICATION + "/confirm"
export const GETME_URL = BASIC_URL + ME + "/person"
export const START_WANDER_URL = BASIC_URL + ME + MEETING + "/wander"
export const GET_MY_MEETING_URL = BASIC_URL + ME + MEETING
