import { useState, useEffect, useContext } from "react";
import { LoginComponent } from "../../components/LoginComponent";
import { SignUpComponent } from "../../components/SignUpComponent";
import { LoginContainer, LoginContent } from "../../styles/styles";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import { Button } from "@mui/material";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [isAuth]);
  return (
    <LoginContainer>
      <LoginContent>
        {isLogin ? <LoginComponent /> : <SignUpComponent />}
        <Button
          id="mudarPagina"
          onClick={() => {
            setIsLogin((prevVal) => !prevVal);
          }}
          style={{ marginTop: "1rem" }}
        >
          {isLogin ? "Cadastre-se" : "Voltar"}
        </Button>
      </LoginContent>
    </LoginContainer>
  );
}
