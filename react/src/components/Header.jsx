import React from "react";
import Menu from "./menu/Menu";
import UserMenu from "./userMenu/UserMenu";
import logo from "../assets/logo.svg";


export default function Header() {
  return (
    <div className="flex  justify-between  p-6 bg-color-grey-bg">
         <Menu />
       <a href="/"><img src={logo} alt="Icon Create Rubric"></img></a>
      <UserMenu />
    </div>
  );
}
