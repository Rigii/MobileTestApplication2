export const USER_EMAIL = "USER_EMAIL"

export const initialState = {
    email: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_EMAIL: return { ...state, email: action.payload };
        default: return state;
    }
}

