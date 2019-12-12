export const USER_EMAIL = "USER_EMAIL"

export const initialState = {
    head: '',
    description: '',
    photo: '',
    video: '',
    mapCoords: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        //case USER_EMAIL: return { ...state, ount: action.payload };
        default: return state;
    }
}
