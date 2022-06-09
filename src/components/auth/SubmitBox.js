import styled from "styled-components";

const SSubmitBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

function SubmitBox({ children }) {
  return <SSubmitBox>{children}</SSubmitBox>;
}

export default SubmitBox;
