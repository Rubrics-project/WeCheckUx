import React from "react";
import Nav from "../components/Nav";
import Menu from "./menu/Menu";
import UserMenu from "./userMenu/UserMenu";

export default function Header() {
  return (
    <>
      <Menu />
      <Nav />
      <UserMenu />
    </>
  );
}
