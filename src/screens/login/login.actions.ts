import { USER_EMAIL } from '../../constants/action.constants';
import { string } from 'prop-types';

export const setEmail = (email: string) => {
    return {
        type: USER_EMAIL,
        payload: email
    }
}