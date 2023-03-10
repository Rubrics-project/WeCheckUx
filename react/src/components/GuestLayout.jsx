import React from "react";
import { Outlet } from "react-router-dom";
// import Create from "../views/Create";

export default function GuestLayout() {
  return (
    <div>
      GuestLayout
      {/* <Create/> */}
      <Outlet />
    </div>
  );
}
