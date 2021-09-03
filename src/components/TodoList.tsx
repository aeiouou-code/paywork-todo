import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import TodoItem from './TodoItem';
import { rootState } from 'store/reducers/rootReducer';
import { ReactComponent as List } from 'assets/svg/clipboard-list.svg';

const TodoList: React.FC = () => {
  const todos = useSelector((state: rootState) => state.todos);

  return (
    <ListContainer>
      {todos.length < 1 ? (
        <Empty>
          <List /> 할 일을 추가해주세요.
        </Empty>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
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

const Empty = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  color: ${({ theme }) => theme.color.textGray};

  svg {
    margin-right: 10px;
  }
`;
