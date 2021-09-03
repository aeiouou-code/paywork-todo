import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { newStatus, Todo } from 'utils/types';
import { checkTodo, remove } from 'store/actions/actionCreators';
import { ReactComponent as Check } from 'assets/svg/check.svg';
import { ReactComponent as Checked } from 'assets/svg/checked.svg';
import { ReactComponent as Delete } from 'assets/svg/delete.svg';
import { ReactComponent as Edit } from 'assets/svg/edit.svg';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    const newStatus: newStatus = { id: todo.id, isCheck: !todo.isCheck };
    dispatch(checkTodo(newStatus));
  };

  const handleRemove = () => {
    dispatch(remove(todo.id));
  };
  return (
    <div>
      <ItemContainer>
        <Left>
          {todo.isCheck ? (
            <Checked onClick={handleCheck} className="checked" />
          ) : (
            <Check onClick={handleCheck} className="check" />
          )}
          <Content isCheck={todo.isCheck}>{todo.content}</Content>
        </Left>
        <Right>
          <EditBtn>
            <Edit fill="black" className="edit" /> 수정
          </EditBtn>
          <DeleteBtn onClick={handleRemove}>
            <Delete className="delete" /> 삭제
          </DeleteBtn>
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
  margin-bottom: 15px;
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
  color: ${({ theme, isCheck }) => (isCheck ? theme.color.textGray : theme.color.black)};
  font-size: 18px;
  font-weight: ${({ isCheck }) => (isCheck ? 400 : 500)};
  line-height: 1.5;
  text-decoration: ${({ isCheck }) => isCheck && 'line-through'};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EditBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  background-color: white;

  .edit {
    margin-right: 5px;
  }

  & :hover {
    color: ${({ theme }) => theme.color.green};
    background-color: ${({ theme }) => theme.color.lightGreen};
    .edit {
      margin-right: 5px;
      fill: ${({ theme }) => theme.color.green};
    }
  }
`;

const DeleteBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  background-color: white;

  .delete {
    margin-right: 5px;
  }

  & :hover {
    color: ${({ theme }) => theme.color.red};
    background-color: ${({ theme }) => theme.color.lightRed};
    .delete {
      margin-right: 5px;
      fill: ${({ theme }) => theme.color.red};
    }
  }
`;
