import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/api";

import PropTypes from "prop-types";

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [cookies, setCookie] = useCookies();

  async function SignIn(email, senha) {
    const values = { email: email, password: senha };
    const response = await api.post("/login", values);

    if (response.status === 200) {
      setCookie("token", response.data.token);
      setCookie("user", response.data.user);
      setCookie("id", response.data.id);
      setIsAuth(true);
      setAdmin(response.data.admin);
    }
    return response;
  }

  return (
    <AuthContext.Provider value={{ SignIn, isAuth, admin }}>
      {children}
    </AuthContext.Provider>
  );
}
