import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import styled from 'styled-components/macro';
import TodoCreate from 'components/TodoCreate';
import TodoList from 'components/TodoList';
import Header from 'components/Header';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header />
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
  padding: 100px;
`;
