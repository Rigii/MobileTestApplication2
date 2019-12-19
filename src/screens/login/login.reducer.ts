import { USER_EMAIL } from './login.actions'

export interface ILoginReducer {
    email: string
}

export const initialState: ILoginReducer = {
    email: ''
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_EMAIL: return { ...state, email: action.payload };
        default: return state;
    }
}

