const BASE_URL = import.meta.env.VITE_APP_BASE_URL
const V = "/v1"
const ME = "/me"
const ACCOUNT = "/account"
const IDENTIFICATION = "/identification"

export const REGISTER_URL = BASE_URL + V + "/register"
export const LOGIN_URL = BASE_URL + V + "/token"
export const MYACCOUNT_URL = BASE_URL + V + ME + ACCOUNT
export const CONFIRM_EMAIL_URL = BASE_URL + V + ME + ACCOUNT + IDENTIFICATION + "/confirm"
export const GETME_URL = BASE_URL + V + ME + "/person"
