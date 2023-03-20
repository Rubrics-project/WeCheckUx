import React from "react";
import Title from "../components/Title";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";

export default function Evaluate() {
  const { userToken } = userAuthContext();

  if (!userToken) {
    return <Navigate to="/acceso" />;
  }
  return (
    <>
      <Title title={"Evaluar"} />
    </>
  );
}
