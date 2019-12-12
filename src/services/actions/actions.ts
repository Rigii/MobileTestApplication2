import { USER_EMAIL } from '../../constants/action.constants';

export function setEmail(email: string) {
return {
type: USER_EMAIL,
payload: email
}
}