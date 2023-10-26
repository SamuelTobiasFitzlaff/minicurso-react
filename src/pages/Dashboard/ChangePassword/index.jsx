import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import api from "../../../services/api";
import { TabContent } from "../../../styles/styles";

export function ChangePassword() {
  const [cookies] = useCookies();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { password, newPassword, confirmNewPassword } = data;
    if (newPassword !== confirmNewPassword) {
      toast("As senhas não conferem", { type: "error" });
      return;
    }
    try {
      const toastId = toast.loading(`Por favor, aguarde...`, {
        autoClose: false,
      });

      const config = {
        headers: { Authorization: `Bearer ${cookies.token}` },
      };

      const newData = {
        id: cookies.id,
        password: password,
        newPassword: newPassword,
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
      <TabContent>
        <h1>Alterar senha</h1>
        <TextField
          {...register("password", { required: "A senha é obrigatória" })}
          id="senhaAtual"
          type="password"
          placeholder="Senha atual"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <TextField
          {...register("newPassword", {
            required: "A nova senha é obrigatória",
          })}
          id="novaSenha"
          type="password"
          placeholder="Nova senha"
          error={!!errors.newPassword}
          helperText={errors?.newPassword?.message}
        />
        <TextField
          {...register("confirmNewPassword", {
            required: "Por favor confirme a senha",
          })}
          id="confirmaSenha"
          type="password"
          placeholder="Confirmar Senha"
          error={!!errors.confirmNewPassword}
          helperText={errors?.confirmNewPassword?.message}
        />
        <Button variant="contained" type="submit" id="botaoAtualizarSenha">
          Atualizar senha
        </Button>
      </TabContent>
    </form>
  );
}
