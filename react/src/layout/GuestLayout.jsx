import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GuestLayout() {
  return (
    <>
      <Header />
      <main className="px-6 relative mb-14 md:px-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
