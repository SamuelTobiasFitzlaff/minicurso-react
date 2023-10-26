import { Button, Tab, Tabs } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { DashboardContainer, TabsContainer } from "../../styles/styles";
import { useState } from "react";

export function Dashboard() {
  const [step, setStep] = useState(0);

  const handleChange = (event, newValue) => {
    setStep(newValue);
  };

  const RenderStep = () => {
    switch (step) {
      case 0:
        return <h1>Home</h1>;
      case 1:
        return <h1>Usurarios</h1>;
      case 2:
        return <h1>Mudar senha</h1>;
      case 3:
        return <h1>Cadastrar usuário</h1>;
      default:
        return <h1>Home</h1>;
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
