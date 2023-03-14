import React from "react";
import Menu from "./menu/Menu";
import UserMenu from "./userMenu/UserMenu";
import logo from "../assets/logo.svg";


export default function Header() {
  return (
    <>
      <Menu />
      <UserMenu />
    </>
  );
}
