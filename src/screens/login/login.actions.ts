export const USER_EMAIL = "USER_EMAIL"

export const setEmail = (email: string) => {
    return {
        type: USER_EMAIL,
        payload: email
    }
}