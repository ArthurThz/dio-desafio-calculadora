import { useState } from "react";

import { Container, Content, Row, Column } from "./styles/styles";

import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClearInput = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleEquals = () => {
    if (!firstNumber === "0" && operation !== "") {
    }
  };

  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleAddNumber("")} />
          <Button label="/" onClick={() => handleAddNumber("")} />
          <Button label="C" onClick={handleClearInput} />
          <Button label="" onClick={() => handleAddNumber("")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleAddNumber("")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={() => handleAddNumber("")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
