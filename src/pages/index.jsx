import { Button } from "@mui/material";
import { HomeContainer } from "../styles/styles";

export function Home() {
  return (
    <HomeContainer>
      <h1>Home!!!</h1>
      <Button variant="outlined" href="/login">
        Login
      </Button>
    </HomeContainer>
  );
}
