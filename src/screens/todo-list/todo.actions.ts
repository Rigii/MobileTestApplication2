export const ADD_ITEM = 'ADD_ITEM';
export const GET_TODO_LIST = 'GET_TODO_LIST';
export const DEL_ITEM = 'DEL_ITEM'

export const addItem = (stateItem: {}) => {
  return {
    type: ADD_ITEM,
    payload: stateItem,
  };
};

export const getTodoList = (stateData: string) => {
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