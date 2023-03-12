import { createBrowserRouter, Navigate} from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
//import UserLayout from "./components/UserLayout";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Rubrics from "./views/Rubrics";
import Edit from "./views/Edit";
import Create from "./views/Create";
import Evaluate from "./views/Evaluate";
import Fqa from "./views/Fqa";
import Home from "./views/Home";
import Projects from "./views/Projects";

const router = createBrowserRouter ([
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
            // {
            //     path: "/crear",
            //     element: <Create />,
            // },
            {
                path: "/editar",
                element: <Edit />,
            },
            {
                path: "/evaluar",
                element: <Evaluate />,
            },
            {
                path: "/preguntasfrecuentes",
                element: <Fqa />,
            },
            {
                path: "/proyectos",
                element: <Projects />,
            },
        ],
    },
    // {
    //     path: "/",
    //     element: <UserLayout />,
    //     children: [
    //         {
    //             path: "/dashboard",
    //             element: <Navigate to="/" />,
    //         },
    //         {
    //             path: "/",
    //             element: <Dashboard />,
    //         },
    //         {
    //             path: "/surveys",
    //             element: <Surveys />,
    //         },
    //         {
    //             path: "/surveys/create",
    //             element: <SurveyView />,
    //         },
    //     ],
    // },
])

export default router
