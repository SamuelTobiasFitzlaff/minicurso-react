import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { SignUpStyle } from "./styles";
import { toast } from "react-toastify";
import api from "../../services/api";

export function SignUpComponent({ createdBy }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast("As senhas não conferem", { type: "error" });
      return;
    }
    try {
      const toastId = toast.loading(`Por favor, aguarde...`, {
        autoClose: false,
      });

      const newData = { ...data, createdBy: createdBy };

      const response = await api.post("/users", newData);
      if (response.status === 201) {
        toast.update(toastId, {
          render: response.data.message,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        reset();
        return;
      }
      if (response.status === 409) {
        toast.update(toastId, {
          render: response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        return;
      }
      toast.update(toastId, {
        render: "Erro ao cadastrar",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpStyle>
        <h1>Cadastro</h1>
        <TextField
          {...register("user", { required: "O nome é obrigatório" })}
          type="text"
          placeholder="Nome"
          error={!!errors.user}
          helperText={errors?.user?.message}
        />
        <TextField
          {...register("email", { required: "O email é obrigatório" })}
          type="email"
          placeholder="E-mail"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          {...register("password", { required: "A senha é obrigatória" })}
          type="password"
          placeholder="Senha"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <TextField
          {...register("confirmPassword", {
            required: "Por favor confirme a senha",
          })}
          type="password"
          placeholder="Confirmar Senha"
          error={!!errors.confirmPassword}
          helperText={errors?.confirmPassword?.message}
        />
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </SignUpStyle>
    </form>
  );
}
