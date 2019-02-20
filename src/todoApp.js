import { combineReducers } from 'redux';
import { VisibilityFilters, SET_VISIBILITY_FILTER, TOGGLE_TODO, ADD_TODO } from './reduxjs/actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default: return state;
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO: return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if(index === action.index) {
            return Object.assign({}, state, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });
    default: return state;
  }
}



const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;