import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Rubrics from "../views/Rubrics";
import Edit from "../views/Edit";
import Create from "../views/Create";
import Evaluate from "../views/Evaluate";
import Fqa from "../views/Fqa";
import Home from "../views/Home";
import Projects from "../views/Projects";
import GuestLayout from "../layout/GuestLayout";
import Results from "../views/Results";
import MisRubricas from "../views/MisRubricas";
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
        path: "/rubricas",
        element: <Rubrics />,
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
      {
        path: "/mis-rubricas",
        element: <Navigate to="/" />,
      },
      {
        path: "/",
        element: <MisRubricas />,
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
