import { ADD_ITEM } from '../../constants/action.constants'

export interface TypesTodoList {
    title: string,
    description: string,
    photoUrl: string,
    location: string,
    video: string,
    id: number
}

export interface TypesInitialState {
    todoList: TypesTodoList[]
}

export const initialState: TypesInitialState = {
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
        case ADD_ITEM: return { ...state, todoList: [...state.todoList, payload] };
        default: return state;
    }
}