import { Reducer, AnyAction } from 'redux';
import {
  CREATE,
  FETCH_TODOS,
  LOAD_TODOS,
  EDIT_TODO,
  CHECK_TODO,
  REMOVE,
} from 'store/actions/actionTypes';
import { Todos } from 'utils/types';

const initialState: Todos = [];

const todoReducer: Reducer<Todos, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);

    case FETCH_TODOS:
      return [...action.payload];

    case LOAD_TODOS:
      return state;

    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            content: action.payload.content,
          };
        }
        return todo;
      });

    case CHECK_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCheck: action.payload.isCheck,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
