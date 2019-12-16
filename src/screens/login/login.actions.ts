import { USER_EMAIL } from '../../constants/action.constants';

export const setEmail = (email: string) => {
    return {
        type: USER_EMAIL,
        payload: email
    }
}