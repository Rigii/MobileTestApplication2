import { ADD_HEAD, ADD_DESCRIPT, ADD_VIDEO, ADD_PHOTO, ADD_COORDINATES } from '../../constants/action.constants'

export const setHead = (res) => {
    return {
        type: ADD_HEAD,
        payload: res
    }
}

export const addDescript = (res) => {
    return {
        type: ADD_DESCRIPT,
        payload: res
    }
}

export const setVideo = (res) => {
    return {
        type: ADD_VIDEO,
        payload: res
    }
}

export const addPhoto = (res) => {
    return {
        type: ADD_PHOTO,
        payload: res
    }
}

export const addCoordinates = (res) => {
    return {
        type: ADD_COORDINATES,
        payload: res
    }
}
