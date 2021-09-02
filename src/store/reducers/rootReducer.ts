import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import { Todos } from 'utils/types';

export interface rootState {
  todos: Todos;
}

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
