import React from 'react';
import styled from 'styled-components/macro';
import { ITodo } from 'types/todo';
import getDate from 'utils/date';
import { DATE_OPTION } from 'utils/constants';
import { ReactComponent as Check } from 'assets/svg/check.svg';
import { ReactComponent as Checked } from 'assets/svg/checked.svg';
import { ReactComponent as Delete } from 'assets/svg/delete.svg';

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <ItemContainer>
        <Left>
          {todo.isCheck ? <Check className="check" /> : <Checked className="checked" />}
          <Content isCheck={todo.isCheck}>{todo.content}</Content>
        </Left>
        <Right>
          <DueDate>~{getDate(todo.due, DATE_OPTION)}</DueDate>
          <Category>{todo.category}</Category>
          <Button>
            <Delete className="delete" />
          </Button>
        </Right>
      </ItemContainer>
    </div>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 680px;
  max-height: 65px;
  padding: 15px 20px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 5px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .check {
    cursor: pointer;
  }

  .checked {
    cursor: pointer;
  }
`;

const Content = styled.h3<{ isCheck: boolean }>`
  margin-left: 15px;
  color: ${({ theme, isCheck }) => (isCheck ? theme.color.black : theme.color.textGray)};
  font-size: 18px;
  font-weight: ${({ isCheck }) => (isCheck ? 600 : 400)};
  line-height: 1.5;
  text-decoration: ${({ isCheck }) => !isCheck && 'line-through'};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DueDate = styled.p`
  color: #8f8c8c;
  font-size: 16px;
`;

const Category = styled.div`
  margin-left: 15px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.alabaster};
  color: black;
  font-size: 16px;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-left: 15px;
  background-color: white;

  & :hover {
    .delete {
      fill: ${({ theme }) => theme.color.red};
    }
  }
`;
