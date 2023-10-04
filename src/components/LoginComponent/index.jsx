import { TextField, Button } from "@mui/material";
import { LoginStyle } from "./styles";

export function LoginComponent() {
  return (
    <LoginStyle>
      <h1>Login</h1>
      <TextField type="email" placeholder="E-mail" />
      <TextField type="password" placeholder="Senha" />
      <Button variant="contained">Entrar</Button>
    </LoginStyle>
  );
}
