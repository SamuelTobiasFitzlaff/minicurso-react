import { Button, TextField } from "@mui/material";
import { SignUpStyle } from "./styles";
import { useForm } from "react-hook-form";

export function SignUpComponent() {
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
          {...register("confirmarSenha", { required: "A senha é obrigatória" })}
          id="cadastroConfirmarSenha"
          type="password"
          placeholder="Confirmar Senha"
          error={!!errors.confirmarSenha}
          helperText={errors?.confirmarSenha?.message}
        />
        <Button id="cadastroBotao" variant="contained" type="submit">
          Cadastrar
        </Button>
      </SignUpStyle>
    </form>
  );
}
