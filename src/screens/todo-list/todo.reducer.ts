import { ADD_ITEM, GET_TODO_LIST, DEL_ITEM, GET_PHOTO } from './todo.actions'


// intreface ITodoItem
export interface TypesTodoList {
    title: string,
    description: string,
    photoUrl: string,
    location: string,
    video: string,
    id: number
}

export interface ITodoReducer {
    todoList: TypesTodoList[]
}

export const initialState: ITodoReducer = {
    todoList: []
}

export function todoReducer(state = initialState, action: any) {
    let {payload} = action;
    switch (action.type) {
        case GET_TODO_LIST: return { ...state, todoList: payload };
        case ADD_ITEM: return { ...state, todoList: [...state.todoList, payload] };
        case DEL_ITEM: return { ...state, todoList: state.todoList.filter(item => item.id !== payload) }
        case GET_PHOTO: 
        console.log(payload)
        return { ...state, photoUrl: payload }
        default: return state;
    }
}