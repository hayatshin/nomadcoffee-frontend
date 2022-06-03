import styled from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Title = styled.button`
  color: ${(props) => props.theme.fontColor};
`;

function Login() {
  return (
    <div>
      <Title onClick={() => isLoggedInVar(true)}>Log in now</Title>
      <buton onClick={() => darkModeVar(true)}>To dark</buton>
      <buton onClick={() => darkModeVar(false)}>To light</buton>
    </div>
  );
}

export default Login;
