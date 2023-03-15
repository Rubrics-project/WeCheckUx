import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Edit from "../views/Edit";
import Create from "../views/Create";
import Evaluate from "../views/Evaluate";
import Fqa from "../views/Fqa";
import Home from "../views/Home";
import Projects from "../views/Projects";
import GuestLayout from "../layout/GuestLayout";
import Results from "../views/Results";
import MisRubricas from "../views/MisRubricas";
import RubricDetail from "../views/RubricDetail";
import UserLayout from "../layout/UserLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registro",
        element: <Signup />,
      },
      {
        path: "/acceso",
        element: <Login />,
      },
      {
        path: "/proyectos",
        element: <Projects />,
      },
      {
        path: "/crear",
        element: <Create />,
      },
      {
        path: "/resultados",
        element: <Results />,
      },
      {
        path: "/preguntasfrecuentes",
        element: <Fqa />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      // {
      //   path: "/mis-rubricas",
      //   element: <Navigate to="/" />,
      // },
      {
        path: "/mis-rubricas",
        element: <MisRubricas />,
      },
      {
        path: "/mis-rubricas/id",
        element: <RubricDetail />,
      },
      {
        path: "/crear",
        element: <Create />,
      },
      {
        path: "/editar",
        element: <Edit />,
      },
      {
        path: "/evaluar",
        element: <Evaluate />,
      },
    ],
  },
]);

export default router;
