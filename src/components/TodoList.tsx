import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, remove } from 'store/actions/actionCreators';
import styled from 'styled-components/macro';
import TodoItem from './TodoItem/TodoItem';
import { rootState } from 'store/reducers/rootReducer';
import { Todo } from 'utils/types';

const TodoList: React.FC = () => {
  const todos = useSelector((state: rootState) => state.todos);

  return (
    <ListContainer>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListContainer>
  );
};

export default TodoList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 755px;
  background-color: ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
`;
