import { combineReducers } from 'redux';
import { loginReducer, ILoginReducer } from '../../screens/login/login.reducer' 
import { todoReducer, ITodoReducer } from '../../screens/todo-list/todo.reducer'

export interface IStore {
    todoReducer: ITodoReducer,
    loginReducer: ILoginReducer
}

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    todoReducer: todoReducer
}) 
