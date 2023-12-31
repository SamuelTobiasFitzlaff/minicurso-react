import { Button, TextField } from "@mui/material";
import { LoginStyle } from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { SignIn } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const toastId = toast.loading(`Por favor, aguarde...`, {
      autoClose: false,
    });
    try {
      const response = await SignIn(data.email, data.senha);
      if (response.status === 200) {
        toast.update(toastId, {
          render: `Olá, ${response.data.user}`,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        navigate("/dashboard");
      } else {
        toast.update(toastId, {
          render: `Erro ao fazer login`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      if (error.response.status === 401) {
        toast.update(toastId, {
          render: `Email ou senha incorretos`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      } else {
        toast.update(toastId, {
          render: `Erro ao fazer login`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
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
