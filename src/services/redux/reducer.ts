import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/login/login.reducer' 
import { addItem } from '../../screens/add-new-item/add-item.reducer' 

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    addItem: addItem
}) 
