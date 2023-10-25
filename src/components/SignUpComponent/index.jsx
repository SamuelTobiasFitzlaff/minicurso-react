import { Button, TextField } from "@mui/material";
import { SignUpStyle } from "./styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";

export function SignUpComponent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.senha !== data.confirmaSenha) {
      toast("As senhas não conferem", { type: "error" });
      return;
    }

    const toastId = toast.loading(`Por favor, aguarde...`, {
      autoClose: false,
    });

    try {
      const response = await api.post("/users", data);
      if (response.status === 201) {
        toast.update(toastId, {
          render: response.data.message,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        reset();
        return;
      } else {
        toast.update(toastId, {
          render: "Erro ao cadastrar usuário",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        return;
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.update(toastId, {
          render: error.response.data.message,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        return;
      } else {
        toast.update(toastId, {
          render: "Erro ao cadastrar usuário",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SignUpStyle>
        <h1>Cadastro</h1>
        <TextField
          {...register("nome", { required: "O nome é obrigatório" })}
          id="cadastroNome"
          type="text"
          placeholder="Nome"
          error={!!errors.nome}
          helperText={errors?.nome?.message}
        />
        <TextField
          {...register("email", { required: "O email é obrigatório" })}
          id="cadastroEmail"
          type="email"
          placeholder="E-mail"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          {...register("senha", { required: "A senha é obrigatória" })}
          id="cadastroSenha"
          type="password"
          placeholder="Senha"
          error={!!errors.senha}
          helperText={errors?.senha?.message}
        />
        <TextField
          {...register("confirmaSenha", {
            required: "A confirmação de senha é obrigatória",
          })}
          id="cadastroConfirmaSenha"
          type="password"
          placeholder="Confirmar Senha"
          error={!!errors.confirmaSenha}
          helperText={errors?.confirmaSenha?.message}
        />
        <Button id="cadastroBotao" variant="contained" type="submit">
          Cadastrar
        </Button>
      </SignUpStyle>
    </form>
  );
}
