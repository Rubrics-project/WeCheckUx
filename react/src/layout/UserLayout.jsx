import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function UserLayout() {
  return (
    <>
      <Header />
      <main className="px-6 relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
