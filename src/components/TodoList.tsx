import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import TodoItem from './TodoItem';
import { rootState } from 'store/reducers/rootReducer';

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
