import merge from 'lodash/merge';
import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions.js';


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  11: {
    id: 11,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  // Object.freeze(state);
  switch(action.type){
    case RECEIVE_TODO:
      console.log("reducer");
      const newTodo = {[action.todo.id]: action.todo};
      console.log(action.todo);
      console.log(newTodo);
      return merge({}, state, newTodo);
      // receiveTodos takes an array (action.todos)
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach(todo => {newState[todo.id] = todo;});
      return merge(newState, state);
    case REMOVE_TODO:
      const emptyState = {};
      const removedState = merge(emptyState, state);
      delete removedState[action.todo.id];
      return removedState;
    default:
     return state;
  }
};

export default todosReducer;
window.todosReducer = todosReducer;
