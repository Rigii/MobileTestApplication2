import { USER_EMAIL } from './login.actions'

export interface TypesLoginReducer {
    email: string
}

export const initialState: TypesLoginReducer = {
    email: ''
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_EMAIL: return { ...state, email: action.payload };
        default: return state;
    }
}

