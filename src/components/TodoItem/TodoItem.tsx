import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Check } from 'assets/svg/check.svg';
import { ReactComponent as Checked } from 'assets/svg/checked.svg';
import { ReactComponent as Delete } from 'assets/svg/delete.svg';

const TodoItem: React.FC = () => {
  return (
    <div>
      <ItemContainer>
        <Left>
          <Check></Check>
          <Title>자바스크립트 공부하기</Title>
        </Left>
        <Right>
          <DueDate>~2021.09.21</DueDate>
          <Category>📚 공부</Category>
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
`;

const Title = styled.h3`
  margin-left: 15px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
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
