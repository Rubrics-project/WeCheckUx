import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import Menu from "../components/menu";

export default function Home() {
  return (
    <>
      <Menu />
      <ButtonPrimary text={"Registrar"} onClick={"pasar onclick"} />
    </>
  );
}
