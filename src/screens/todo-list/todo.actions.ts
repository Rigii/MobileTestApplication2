import { ADD_ITEM } from '../../constants/action.constants'

export const addItem = (stateItem) => {
    return {
        type: ADD_ITEM,
        payload: stateItem
    }
}