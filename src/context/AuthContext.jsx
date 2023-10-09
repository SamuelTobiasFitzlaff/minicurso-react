import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    setIsAuth(!!cookies.token);
  }, []);

  async function SignIn(email, password) {
    const values = { email: email, password: password };
    const response = await api.post("/login", values);
    if (response.status === 200) {
      setCookie("token", response.data.token);
      setIsAuth(true);
    }
    return response;
  }

  return (
    <AuthContext.Provider value={{ SignIn, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
