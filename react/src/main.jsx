import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
import "./components/menu/menu.css";
import "./components/userMenu/userMenu.css";
import router from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <RouterProvider router={router} />
    {/* </ContextProvider> */}
  </React.StrictMode>
);
