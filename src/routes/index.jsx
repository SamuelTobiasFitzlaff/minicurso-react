import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

export default function Routes() {
  return useRoutes([
    { path: "/404", element: <h1>Not Found</h1> },
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "*", element: <Navigate to="/404" /> },
  ]);
}
