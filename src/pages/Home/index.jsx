import { Button, Card, CardContent, TextField } from "@mui/material";
import { HomeContainer } from "../../styles/styles";
import { useState } from "react";

export function Home() {
  const [numero, setNumero] = useState(0);
  const [texto, setTexto] = useState("");

  return (
    <HomeContainer>
      <h1>Home</h1>
      <Button id="linkLogin" href="/login" variant="outlined">
        Login
      </Button>
      <Card>
        <CardContent>
          <h2>Você clicou {numero} vezes!</h2>
          <Button
            id="soma"
            variant="contained"
            onClick={() => {
              setNumero((prevVal) => prevVal + 1);
            }}
          >
            Soma
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <h2>Texto: {texto}</h2>
          <TextField
            id="texto"
            type="text"
            onChange={(e) => {
              setTexto(e.target.value);
            }}
          />
        </CardContent>
      </Card>
    </HomeContainer>
  );
}
