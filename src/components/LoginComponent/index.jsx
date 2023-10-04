import { TextField, Button } from "@mui/material";
import { LoginStyle } from "./styles";

export function LoginComponent() {
  return (
    <LoginStyle>
      <h1>Login</h1>
      <TextField id="loginEmail" type="email" placeholder="E-mail" />
      <TextField id="loginSenha" type="password" placeholder="Senha" />
      <Button id="loginBotao" variant="contained">
        Entrar
      </Button>
    </LoginStyle>
  );
}
