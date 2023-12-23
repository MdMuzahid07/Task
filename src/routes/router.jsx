import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Login from "../components/authentication/Login";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
