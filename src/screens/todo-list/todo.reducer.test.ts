import { todoReducer } from '../todo.reducer'
import * as types from '../todo.actions'

describe('todos reducer', () => {

  it('should return the initial state', () => {
    expect(todoReducer(undefined, {})).toEqual({ todoList: [] })
  })

  it('should handle ADD_ITEM', () => {
    expect(
      todoReducer({ todoList: [] }, {
        type: types.ADD_ITEM,
        payload: {
          title: 'This is title',
          description: 'description',
          photoUrl: 'photo',
          location: 'location',
          video: 'video',
          id: 123
        }
      })
    ).toEqual({
      todoList: [{
        title: 'This is title',
        description: 'description',
        photoUrl: 'photo',
        location: 'location',
        video: 'video',
        id: 123
      }]
    })
  })

  it('should handle GET_TODO_LIST', () => {
    expect(
      todoReducer({ todoList: [] }, {
        type: types.GET_TODO_LIST,
        payload: [{
          title: 'This is title',
          description: 'description',
          photoUrl: 'photo',
          location: 'location',
          video: 'video',
          id: 123
        }]
      })
    ).toEqual({
      todoList: [
        {
          title: 'This is title',
          description: 'description',
          photoUrl: 'photo',
          location: 'location',
          video: 'video',
          id: 123
        }]
    })
  })

  it('should delete itme when id is matched', () => {

    const initialStore = {
      todoList: [{
        title: 'This is title',
        description: 'description',
        photoUrl: 'photo',
        location: 'location',
        video: 'video',
        id: 123
      }]
    };

    const nextStore = todoReducer({
      todoList: [{
        title: 'This is title',
        description: 'description',
        photoUrl: 'photo',
        location: 'location',
        video: 'video',
        id: 123
      }]
    }, {
      type: types.DEL_ITEM,
      payload: 123
    })

    expect(nextStore.todoList.length).toBe(initialStore.todoList.length - 1);
  })

})


