import merge from 'lodash/merge';
import {RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODO:
      const newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return merge(newTodo, state);
      // receiveTodos takes an array (action.todos)
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach(todo => {newState[todo.id] = todo;});
      return merge(newState, state);
    default:
     return state;
  }
};

export default todosReducer;
window.todosReducer = todosReducer;
