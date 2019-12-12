
export const USER_EMAIL = "USER_EMAIL"

export const initialState = {
    email: '',
    title: ''
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_EMAIL: return { ...state, ount: action.payload };
        default: return state;
    }
}

export default appReducer;