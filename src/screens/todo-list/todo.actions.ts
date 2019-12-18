export const ADD_ITEM = "ADD_ITEM"
export const GET_STORAGE_DATA = "GET_STORAGE_DATA"

export const addItem = (stateItem: {}) => {
    return {
        type: ADD_ITEM,
        payload: stateItem
    }
}


export const getTodoList = (stateData: string) => {
    return {
        type: GET_STORAGE_DATA,
        payload: stateData
    }
}




