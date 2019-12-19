import { todoReducer, initialState } from './todo.reducer'
import * as types from './todo.actions'
const MOCK_ITEM = {
  title: 'This is title',
  description: 'description',
  photoUrl: 'photo',
  location: 'location',
  video: 'video',
  id: 123
}

describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({ todoList: [] })
  })

  it('should handle ADD_ITEM', () => {
    expect(
      todoReducer(initialState, {
        type: types.ADD_ITEM,
        payload: MOCK_ITEM
      })
    ).toEqual({
      todoList: [MOCK_ITEM]
    })
  })

  it('should handle GET_TODO_LIST', () => {
    expect(
      todoReducer({ todoList: [] }, {
        type: types.GET_TODO_LIST,
        payload: [MOCK_ITEM]
      })
    ).toEqual({
      todoList: [MOCK_ITEM]
    })
  })

  it('should delete itme when id is matched', () => {

    const initialStore = {
      todoList: [MOCK_ITEM]
    };

    const nextStore = todoReducer(initialStore, {
      type: types.DEL_ITEM,
      payload: MOCK_ITEM.id
    })

    expect(nextStore.todoList.length).toBe(0);
  })
})


