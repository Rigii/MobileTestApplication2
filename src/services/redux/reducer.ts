import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/login/login.reducer' 
import { todoReducer } from '../../screens/todo-list/todo.reducer'

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    todoReducer: todoReducer
}) 
