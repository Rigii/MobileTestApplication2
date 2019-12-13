import {ADD_HEAD, ADD_DESCRIPT, ADD_VIDEO, ADD_PHOTO, ADD_COORDINATES } from '../../constants/action.constants'
//import { ADD_HEAD } from '../add-new-item/add-item.actions'
export const initialState = {
    head: '',
    description: '',
    photo: '',
    video: '',
    mapCoords: ''
}

export function addItem (state = initialState, action: any) {
    let payload = action.payload;
    switch (action.type) {
        case ADD_HEAD: return { ...state, head: payload };
        case ADD_DESCRIPT: return { ...state, description: payload };
        default: return state;
    }
}
