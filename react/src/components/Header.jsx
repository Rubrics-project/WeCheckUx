import React from "react";
import Menu from "./menu/Menu";
import Nav from "../components/Nav";
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
