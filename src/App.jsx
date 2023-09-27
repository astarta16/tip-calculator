import React from 'react';
import styled from 'styled-components';
import Logo from './assets/logo.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  background-color: #C5E4E7;
`;

const App = () => {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <div>
        
      </div>
    </Container>
  );
};

export default App;
