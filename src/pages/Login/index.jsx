import { useState } from "react";
import { LoginComponent } from "../../components/LoginComponent";
import { SignUpComponent } from "../../components/SignUpComponent";
import { LoginContainer, LoginContent } from "../../styles/styles";
import { Button } from "@mui/material";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <LoginContainer>
      <LoginContent>
        {isLogin ? <LoginComponent /> : <SignUpComponent />}
        <Button
          id="mudarPagina"
          onClick={() => setIsLogin((prevVal) => !prevVal)}
        >
          {isLogin ? "Cadastre-se" : "Voltar para Login"}
        </Button>
      </LoginContent>
    </LoginContainer>
  );
}
