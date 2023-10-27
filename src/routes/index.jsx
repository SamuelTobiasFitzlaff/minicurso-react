import { Navigate, useRoutes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages";
import { Dashboard } from "../pages/Dashboard";

export default function Routes() {
  return useRoutes([
    { path: "/404", element: <h1>404</h1> },
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}
