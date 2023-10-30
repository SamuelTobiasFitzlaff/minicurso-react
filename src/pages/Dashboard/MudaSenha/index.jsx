import { Button, TextField } from "@mui/material";
import { TabContent } from "../../../styles/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useCookies } from "react-cookie";

export function MudaSenha() {
  const [cookies] = useCookies();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { senha, novaSenha, confirmarNovaSenha } = data;
    if (novaSenha !== confirmarNovaSenha) {
      toast("As senhas não conferem", { type: "error" });
      return;
    }

    const toastId = toast.loading(`Por favor, aguarde...`, {
      autoClose: false,
    });
    try {
      const config = {
        headers: { Authorization: `Bearer ${cookies.token}` },
      };

      const newData = {
        id: cookies.id,
        senha,
        novaSenha,
      };

      const response = await api.post("/changePassword", newData, config);
      if (response.status === 200) {
        toast.update(toastId, {
          render: response.data.message,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        reset();
      } else {
        toast.update(toastId, {
          render: "Erro ao cadastrar",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Erro ao cadastrar",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabContent>
        <h1>Alterar senha</h1>
        <TextField
          {...register("senha", { required: "A senha é obrigatória" })}
          id="senhaAtual"
          type="password"
          placeholder="Senha atual"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <TextField
          {...register("novaSenha", {
            required: "A nova senha é obrigatória",
          })}
          id="novaSenha"
          type="password"
          placeholder="Nova senha"
          error={!!errors.newPassword}
          helperText={errors?.newPassword?.message}
        />
        <TextField
          {...register("confirmarNovaSenha", {
            required: "Por favor confirme a senha",
          })}
          id="confirmaSenha"
          type="password"
          placeholder="Confirmar Senha"
          error={!!errors.confirmNewPassword}
          helperText={errors?.confirmNewPassword?.message}
        />
        <Button variant="contained" type="submit" id="atualizarSenha">
          Atualizar senha
        </Button>
      </TabContent>
    </form>
  );
}
