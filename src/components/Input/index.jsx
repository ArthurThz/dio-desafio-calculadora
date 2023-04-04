import { InputContainer } from "./styles";

const Input = ({ value }) => {
  return (
    <div>
      <InputContainer>
        <input type="text" disabled value={value} />
      </InputContainer>
    </div>
  );
};

export default Input;
