import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import styled from 'styled-components/macro';
import TodoCreate from 'components/TodoCreate';
import TodoList from 'components/TodoList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <TodoCreate />
        <TodoList />
      </Container>
    </Provider>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
