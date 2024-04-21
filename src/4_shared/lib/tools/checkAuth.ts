export const checkAuth = (): boolean => {
    if (localStorage.getItem("isAuthed")) {
        return true
    } else {
        location.pathname = "/auth/login"
    }

    return false
}
