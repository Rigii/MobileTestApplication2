import { TypesTodoList } from './todo.reducer'

export const ADD_ITEM = 'ADD_ITEM';
export const GET_TODO_LIST = 'GET_TODO_LIST';
export const DEL_ITEM = 'DEL_ITEM';
export const GET_PHOTO = 'GET_PHOTO';

export const addItem = (stateItem: TypesTodoList) => {
  return {
    type: ADD_ITEM,
    payload: stateItem,
  };
};

export const getTodoList = (stateData: object) => { // obj
  return {
    type: GET_TODO_LIST,
    payload: stateData,
  };
};

export const deleteItem = (id: number) => {
  return {
    type: DEL_ITEM,
    payload: id,
  };
}

export const getPhoto = (photo: TypesTodoList) => {
  return {
    type: GET_PHOTO,
    payload: photo,
  };
};