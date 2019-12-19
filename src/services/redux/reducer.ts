import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/login/login.reducer' 
import { todoReducer, ITodoReducer } from '../../screens/todo-list/todo.reducer'

// TODO: use this type in all stateToProps
export interface IStore {
    todoReducer: ITodoReducer
}

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    todoReducer: todoReducer
}) 
