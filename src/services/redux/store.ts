import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
