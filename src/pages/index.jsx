import { useState, useEffect } from "react";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { HomeContainer } from "../styles/styles";

export function Home() {
  const [numero, setNumero] = useState(0);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    console.log(numero);
  }, [numero]);

  useEffect(() => {
    console.log("executou uma vez");
  }, []);

  return (
    <HomeContainer>
      <h1>Home</h1>
      <Button variant="outlined" href="/login" id="login">
        Login
      </Button>
      <Card>
        <CardContent>
          <h2>Você clicou {numero} vezes!</h2>
          <Button
            id="soma"
            variant="contained"
            onClick={() => {
              setNumero((prevNum) => prevNum + 1);
            }}
          >
            Soma {numero}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2>Texto: {texto}</h2>
          <TextField
            id="texto"
            type="text"
            placeholder="Digite algo..."
            onChange={(e) => setTexto(e.target.value)}
          />
        </CardContent>
      </Card>
    </HomeContainer>
  );
}
