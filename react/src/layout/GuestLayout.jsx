import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GuestLayout() {
  return (
    <div>
      <Header />
      <main className="px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
