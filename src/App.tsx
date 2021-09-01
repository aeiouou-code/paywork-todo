import React from 'react';
import styled from 'styled-components/macro';
import TodoCreate from 'components/TodoCreate';
import TodoList from 'components/TodoList';

const App: React.FC = () => {
  return (
    <Container>
      <TodoCreate />
      <TodoList />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
