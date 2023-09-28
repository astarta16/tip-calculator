import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './assets/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #C5E4E7;
`;

const LogoContainer = styled.div`
  margin: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 400px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    width: 80%;
    max-width: 800px;
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  padding:30px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const RightSide = styled.div`
  width: 100%;
  background-color: #00474B;
  color: white;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding:10px;
  @media (min-width: 768px) {
    width: 40%;
    margin-left: 20px;
   padding: 50px;
  }
`;

const InputLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 15px;
`;

const TipButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #C5E4E7;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #87A6A9;
  }
`;

const NumberOfPeopleLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const RightSideContent = styled.div`
  margin-bottom: 30px; 
`;

const ResetButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #002426;
  }

  @media (min-width: 768px) {
    margin-top: 30px; 
    margin-bottom: 0; 
  }
`;

const App = () => {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipsPercentage] = useState(0);

 

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      <Card>
        <LeftSide>
          <InputLabel>Bill</InputLabel>
          <Input  value={bill} onChange={(event) => setBill(event.target.value)} type="text" defaultValue="0" />

          <InputLabel>Select Tip %</InputLabel>
          <ButtonGroup>
            <TipButton>5%</TipButton>
            <TipButton>10%</TipButton>
            <TipButton>15%</TipButton>
            <TipButton>20%</TipButton>
            <TipButton>25%</TipButton>
            <TipButton>Custom</TipButton>
          </ButtonGroup>

          <NumberOfPeopleLabel>Number of People</NumberOfPeopleLabel>
          <Input type="text" defaultValue="0" />
        </LeftSide>
        <RightSide>
          <RightSideContent>
            <div>Tip Amount / Person</div>
            <div style={{ marginTop: '50px' }}>Total / Person</div>
          </RightSideContent>
          <ResetButton>Reset</ResetButton>
        </RightSide>
      </Card>
    </Container>
  );
};

export default App;
