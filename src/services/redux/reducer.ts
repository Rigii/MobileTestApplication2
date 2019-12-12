import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/login/login.reducer' 

export const rootReducer = combineReducers({
    loginReducer: loginReducer
}) 
