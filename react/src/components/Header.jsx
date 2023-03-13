import React from "react";
import Menu from "./menu/Menu";
import UserMenu from "./userMenu/UserMenu";

export default function Header() {
  return (
    <>
      <Menu />
      <UserMenu />
    </>
  );
}
