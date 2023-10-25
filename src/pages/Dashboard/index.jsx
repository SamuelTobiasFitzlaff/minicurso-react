import { Button, Tab, Tabs } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  DashboardContainer,
  TabContent,
  TabsContainer,
} from "../../styles/styles";
import { useState } from "react";
import { Home } from "./Home";
import { Users } from "./Users";
import { ChangePassword } from "./ChangePassword";
import { SignUpComponent } from "../../components/SignUpComponent";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import api from "../../services/api";

export function Dashboard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleLogout = async () => {
    const config = {
      headers: { Authorization: `Bearer ${cookies.token}` },
      data: { id: cookies.id },
    };
    const response = await api.delete("/logout", config);
    console.log(response);

    removeCookie("token");
    removeCookie("user");
    removeCookie("id");
    navigate("/");
  };

  const handleChange = (event, newValue) => {
    setStep(newValue);
  };

  const RenderStep = () => {
    switch (step) {
      case 0:
        return <Home />;
      case 1:
        return <Users />;
      case 2:
        return <ChangePassword />;
      case 3:
        return (
          <TabContent>
            <SignUpComponent createdBy={cookies.id} />
          </TabContent>
        );
      default:
        return <Home />;
    }
  };

  return (
    <DashboardContainer>
      <TabsContainer>
        <Tabs value={step} onChange={handleChange}>
          <Tab label="Home" id="HomeTab" />
          <Tab label="Usuários" id="UsuarioTab" />
          <Tab label="Alterar senha" id="AlterarSenhaTab" />
          <Tab label="Cadastrar usuário" id="CadastrarUsuarioTab" />
        </Tabs>
        <Button
          id="logout"
          variant="outlined"
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
