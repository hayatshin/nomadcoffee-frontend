import styled from "styled-components";

const SClickButton = styled.button`
  margin-top: 20px;
  padding: 0.5rem 1rem;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 450px;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
`;

function ClickButton({ onClick, message }) {
  <SClickButton onClick={onClick}>{message}</SClickButton>;
}

export default ClickButton;
