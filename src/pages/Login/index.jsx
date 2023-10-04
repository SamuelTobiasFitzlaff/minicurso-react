import { LoginComponent } from "../../components/LoginComponent";
import { SignUpComponent } from "../../components/SignUpComponent";
import { LoginContainer, LoginContent } from "../../styles/styles";

export function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginComponent />
        <SignUpComponent />
      </LoginContent>
    </LoginContainer>
  );
}
