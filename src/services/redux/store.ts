import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import appReducer from './reducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers(
  { count: appReducer }
  );

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
