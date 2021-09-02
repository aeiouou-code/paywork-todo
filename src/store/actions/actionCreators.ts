// import { Action, IUpdate, IRemove, ISwap, IModal, CreatedTodo } from 'types';
import { Todo, Todos, newTodo, newStatus } from 'utils/types';
import {
  CREATE,
  REMOVE,
  FETCH_TODOS,
  LOAD_TODOS,
  EDIT_TODO,
  CHECK_TODO,
  UNCHECK_TODO,
} from 'store/actions/actionTypes';

export const create = (Todo: Todo) => ({
  type: CREATE,
  payload: Todo,
});

export const remove = (id: number) => ({
  type: REMOVE,
  payload: {
    id,
  },
});

export const fetchTodos = (Todos: Todos) => ({
  type: FETCH_TODOS,
  payload: Todos,
});

export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const editTodo = (newTodo: newTodo) => ({
  type: EDIT_TODO,
  payload: newTodo,
});

export const checkTodo = (newStatus: newStatus) => ({
  type: CHECK_TODO,
  payload: newStatus,
});

export const uncheckTodo = (id: string) => ({
  type: UNCHECK_TODO,
  payload: id,
});
