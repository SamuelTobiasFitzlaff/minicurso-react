import { Button, Tab, Tabs } from "@mui/material";
import {
  DashboardContainer,
  TabContent,
  TabsContainer,
} from "../../styles/styles";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Home } from "./Home";
import { Usuarios } from "./Usuarios";
import { MudaSenha } from "./MudaSenha";
import { SignUpComponent } from "../../components/SignUpComponent";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useCookies } from "react-cookie";

export function Dashboard() {
  const [step, setStep] = useState(0);

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleChange = (event, newValue) => {
    setStep(newValue);
  };

  const RenderStep = () => {
    switch (step) {
      case 0:
        return <Home />;
      case 1:
        return <Usuarios />;
      case 2:
        return <MudaSenha />;
      case 3:
        return (
          <TabContent>
            <SignUpComponent />
          </TabContent>
        );
      default:
        return <Home />;
    }
  };

  const handleLogout = async () => {
    const config = {
      headers: { Authorization: `Bearer ${cookies.token}` },
      data: { id: cookies.id },
    };
    const response = await api.delete("/logout", config);
    if (response.status === 200) {
      removeCookie("token");
      removeCookie("user");
      removeCookie("id");
      navigate("/");
    }
  };

  return (
    <DashboardContainer>
      <TabsContainer>
        <Tabs value={step} onChange={handleChange}>
          <Tab label="Home" id="HomeTab" />
          <Tab label="Usuários" id="UsuarioTab" />
          <Tab label="Alterar Senha" id="AlterarSenhaTab" />
          <Tab label="Cadastrar Usuário" id="CadastrarUsuarioTab" />
        </Tabs>
        <Button
          variant="outlined"
          id="logout"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Sair
        </Button>
      </TabsContainer>
      {RenderStep()}
    </DashboardContainer>
  );
}
