import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/AuthContext";

import { TextField, Button } from "@mui/material";
import { LoginStyle } from "./styles";

export function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { SignIn } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const response = await SignIn(data.email, data.senha);
    console.log(response);
    if (response.status === 200) {
      Navigate("/dashboard");
    }
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
