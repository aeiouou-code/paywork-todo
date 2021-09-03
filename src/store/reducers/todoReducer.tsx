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
  const { type, payload } = action;

  switch (type) {
    case CREATE:
      return [...state, payload];

    case REMOVE:
      return state.filter((todo) => todo.id !== payload.id);

    case FETCH_TODOS:
      return [...payload];

    case LOAD_TODOS:
      return state;

    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            content: payload.content,
          };
        }
        return todo;
      });

    case CHECK_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            isCheck: payload.isCheck,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
