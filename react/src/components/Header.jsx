import React from "react";
import Menu from "./menu/Menu";
import UserMenu from "./userMenu/UserMenu";

export default function Header() {
  return (
    <div className="flex  justify-between  p-8">
         <Menu />
       <a><img src={logo} alt="Icon Create Rubric"></img></a>
      <UserMenu />
    </div>
  );
}
