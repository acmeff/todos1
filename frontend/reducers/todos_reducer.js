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
      return merge(action.todo, state);
    case RECEIVE_TODOS:
      return merge(action.todos, state);
    default:
     return state;
  }
};

export default todosReducer;
window.todosReducer = todosReducer;
