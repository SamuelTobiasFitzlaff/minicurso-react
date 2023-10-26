import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { LoginStyle } from "./styles";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function LoginComponent() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { SignIn } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const toastId = toast.loading(`Por favor, aguarde...`, {
        autoClose: false,
      });
      const response = await SignIn(data.email, data.senha);
      if (response.status === 200) {
        toast.update(toastId, {
          render: `Olá, ${response.data.user}!`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        navigate("/dashboard");
      }
      if (response.status === 404) {
        toast.update(toastId, {
          render: `Usuário ou senha incorretos`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: `Erro ao fazer login`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
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
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        {!!errors.password && <p>{errors.password.message}</p>}
        <Button id="loginBotao" variant="contained" type="submit">
          Entrar
        </Button>
      </LoginStyle>
    </form>
  );
}
