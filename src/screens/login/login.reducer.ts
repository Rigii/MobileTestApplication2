export const USER_EMAIL = "USER_EMAIL"

interface InitialStateTypes{
    email: string
}

export const initialState: InitialStateTypes = {
    email: ''
}

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_EMAIL: return { ...state, email: action.payload };
        default: return state;
    }
}

