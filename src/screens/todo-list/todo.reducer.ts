import { ADD_ITEM, GET_STORAGE_DATA } from './todo.actions'
import { AsyncStorage } from 'react-native'

export interface TypesTodoList {
    title: string,
    description: string,
    photoUrl: string,
    // TODO: change type null | string
    location: string,
    video: string,
    id: number
}

export interface TypesInitialState {
    todoList: TypesTodoList[]
}

export const initialState: TypesInitialState = {
    // TODO: mocked can be removed
    todoList: [
        {
            title: 'Go to shop',
            description: '',
            photoUrl: '',
            location: 'dfgdfg',
            video: '',
            id: 123
        },
        {
            title: 'Go to home',
            description: '',
            photoUrl: '',
            location: 'dfgd',
            video: 'dfsgdfg',
            id: 124
        },
        {
            title: 'Go to daddy',
            description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
            photoUrl: 'dfgdg',
            location: 'dfgdfg',
            video: 'dfgfg',
            id: 125
        }
    ]
}

export function todoReducer(state = initialState, action: any) {
    let payload = action.payload;
    switch (action.type) {
        case GET_STORAGE_DATA: return { ...state, todoList: payload };
        case ADD_ITEM: 
        // TODO: clear
        let pushedItem = payload
        pushedItem.id = state.todoList.length + 30;
        return { ...state, todoList: [...state.todoList, pushedItem] };
        default: return state;
    }
}