import { Button, Tab, Tabs } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  DashboardContainer,
  TabContent,
  TabsContainer,
} from "../../styles/styles";
import { useState } from "react";
import { Home } from "./Home";
import { Usuarios } from "./Usuarios";
import { MudaSenha } from "./MudaSenha";
import { SignUpComponent } from "../../components/SignUpComponent";

export function Dashboard() {
  const [step, setStep] = useState(0);

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

  return (
    <DashboardContainer>
      <TabsContainer>
        <Tabs value={step} onChange={handleChange}>
          <Tab label="Home" />
          <Tab label="Usuários" />
          <Tab label="Alterar senha" />
          <Tab label="Cadastrar usuário" />
        </Tabs>
        <Button variant="outlined" startIcon={<LogoutIcon />}>
          Sair
        </Button>
      </TabsContainer>
      {RenderStep()}
    </DashboardContainer>
  );
}
