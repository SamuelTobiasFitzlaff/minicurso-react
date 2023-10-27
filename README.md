# minicurso-react

- [Apresentação de slides](https://bpluscombr-my.sharepoint.com/:p:/g/personal/samuel_fitzlaff_bplus_com_br/EV9B6HSWI2pOnUiQl0WJnRcBnGE9BO6KpH0YVRFmtjj79A?e=2498U2)
- [Página demo](https://minicurso.fitzlaff.com/)

```
npm install react-router-dom @mui/material @mui/styled-engine-sc @mui/icons-material @emotion/react @emotion/styled axios react-hook-form react-cookie react-toastify styled-components@5.3.11
```

### url da api: 
```
https://minicurso-api.vercel.app/api
```

## Links uteis:
- Node.js: [nodejs.org/en](https://nodejs.org/en)
- Documentação vite: [vitejs.dev/guide](https://vitejs.dev/guide/)
- Favicon: [emojitofavicon.com](https://emojitofavicon.com/)
- Documentação Material UI: [mui.com](https://mui.com/)
- Documentação React Hooks: [react.dev/reference/react](https://react.dev/reference/react)
- Documentação React Toastify: [fkhadra.github.io/react-toastify/introduction](https://fkhadra.github.io/react-toastify/introduction/)

## Códigos uteis

```
import { createContext, useEffect, useState } from "react";
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
```

```
<ToastContainer
    position="bottom-right"
    autoClose={5000}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
```
