import { Button, TextField } from "@mui/material";
import { LoginStyle } from "./styles";
import { useForm } from "react-hook-form";

export function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginStyle>
        <h1>Login</h1>
        <TextField
          {...register("email", { required: "O email é obrigatório" })}
          id="loginEmail"
          type="email"
          placeholder="E-mail"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          {...register("senha", { required: "A senha é obrigatória" })}
          id="loginSenha"
          type="password"
          placeholder="Senha"
          error={!!errors.senha}
          helperText={errors?.senha?.message}
        />
        <Button id="loginBotao" variant="contained" type="submit">
          Entrar
        </Button>
      </LoginStyle>
    </form>
  );
}
