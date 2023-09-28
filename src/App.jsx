import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./assets/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #c5e4e7;
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
  padding: 30px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

const RightSide = styled.div`
  width: 100%;
  background-color: #00474b;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  background-color: #c5e4e7;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #87a6a9;
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

const Value = styled.h1`
  margin-left: 30px;
  font-size: 24px;
`;

const Text = styled.h5`
  font-size: 16px;
  margin: 0;
`;

const PersonText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const App = () => {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipsPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const tipPercentages = [5, 10, 15, 20, 25];

  const tipAmount = (bill * tipPercentage) / 100 / numberOfPeople;
  const totalAmount = bill / numberOfPeople + tipAmount;

  const handleReset = () => {
    setBill("");
    setTipsPercentage(0.0);
    setNumberOfPeople(1);
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      <Card>
        <LeftSide>
          <InputLabel>Bill</InputLabel>
          <Input
            value={bill}
            onChange={(event) => setBill(event.target.value)}
            type="text"
          />

          <InputLabel>Select Tip %</InputLabel>
          <ButtonGroup>
            {tipPercentages.map((percentage, index) => (
              <TipButton
                key={percentage}
                onClick={() => setTipsPercentage(percentage)}>
                {percentage}%
              </TipButton>
            ))}
            <input
              type="number"
              value={tipPercentage === 0 ? "" : tipPercentage}
              onChange={(event) => setTipsPercentage(event.target.value)}
              placeholder="Custom"
              min="0"
              max="100"
            />
          </ButtonGroup>

          <NumberOfPeopleLabel>Number of People</NumberOfPeopleLabel>
          <Input
            value={numberOfPeople}
            onChange={(event) => setNumberOfPeople(event.target.value)}
            type="number"
          />
        </LeftSide>
        <RightSide>
          <RightSideContent>
            {numberOfPeople >= 0 && (
              <>
                <FlexContainer>
                  <div>
                    <Text>Tip Amount</Text>
                    <PersonText>/ person</PersonText>
                  </div>
                  <Value>{tipAmount.toFixed(2)}</Value>
                </FlexContainer>

                <FlexContainer>
                  <div>
                    <Text>Total</Text>
                    <PersonText>/ person</PersonText>
                  </div>
                  <Value>{totalAmount.toFixed(2)}</Value>
                </FlexContainer>
              </>
            )}
          </RightSideContent>
          <ResetButton onClick={handleReset}>Reset</ResetButton>
        </RightSide>
      </Card>
    </Container>
  );
};

export default App;
