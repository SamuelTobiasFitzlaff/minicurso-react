import { useRoutes, Navigate } from "react-router-dom";

export default function Routes() {
  return useRoutes([
    { path: "/404", element: <h1>404</h1> },
    { path: "/", element: <h1>Home</h1> },
    { path: "/login", element: <h1>Login</h1> },
    { path: "/dashboard", element: <h1>Dashboard</h1> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}
