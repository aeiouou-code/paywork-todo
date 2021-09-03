import React from 'react';
import styled from 'styled-components/macro';
import getDate from 'utils/date';
import { DATE_OPTION } from 'utils/constants';

const Header: React.FC = () => {
  const now: Date = new Date();
  const dateString = getDate(now, DATE_OPTION);
  return (
    <Container>
      <Logo src="/PayworkTodo.png" alt="logo" />
      <Day>🌤 {dateString}</Day>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 250px;
`;

const Day = styled.div`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #fffced;
  border-radius: 5px;
  font-weight: 500;
`;
