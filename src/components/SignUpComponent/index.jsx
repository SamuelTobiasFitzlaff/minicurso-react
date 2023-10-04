import { Button, TextField } from "@mui/material";
import { SignUpStyle } from "./styles";

export function SignUpComponent() {
  return (
    <SignUpStyle>
      <h1>Cadastro</h1>
      <TextField id="cadastroNome" type="text" placeholder="Nome" />
      <TextField id="cadastroEmail" type="email" placeholder="E-mail" />
      <TextField id="cadastroSenha" type="password" placeholder="Senha" />
      <TextField
        id="cadastroConfirmaSenha"
        type="password"
        placeholder="Confirmar Senha"
      />
      <Button id="cadastroBotao" variant="contained">
        Cadastrar
      </Button>
    </SignUpStyle>
  );
}
