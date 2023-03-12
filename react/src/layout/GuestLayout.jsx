import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/menu";

export default function GuestLayout() {
  return (
    <div>
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
