import React from 'react';
import styled from 'styled-components/macro';
import TodoItem from './TodoItem/TodoItem';
import { mockData } from 'assets/data/mockData';

const TodoList: React.FC = () => {
  const data = mockData;
  return (
    <ListContainer>
      {data.map((todo) => (
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
