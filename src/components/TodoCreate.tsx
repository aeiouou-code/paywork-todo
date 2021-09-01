import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components/macro';

const TodoCreate: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <Form>
      <InputContainer>
        <Input
          type="text"
          placeholder="할 일을 입력해주세요."
          value={text}
          onChange={handleInput}
        />
      </InputContainer>
      <Button onClick={handleSubmit}>추가하기</Button>
    </Form>
  );
};

export default TodoCreate;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin: 25px 0px;
  max-width: 755px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 600px;
  min-height: 55px;
  padding: 0px 20px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  border-radius: 5px;
`;

const Input = styled.input`
  flex-grow: 1;
  min-height: 45px;
  border: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.textGray};
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 55px;
  padding: 7px;
  margin-left: 18px;
  background-color: ${({ theme }) => theme.color.darkGray};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;

  & :hover {
    background-color: #282828;
  }
`;
