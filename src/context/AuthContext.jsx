import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    const authToken = async () => {
      if (cookies.token) {
        const body = { id: cookies.id };
        const config = {
          headers: { Authorization: `Bearer ${cookies.token}` },
        };
        await api.post("/authToken", body, config).then((res) => {
          setIsAuth(res.data.auth);
        });
      } else {
        setIsAuth(false);
      }
    };
    authToken();
  }, []);

  async function SignIn(email, password) {
    const values = { email: email, password: password };

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
