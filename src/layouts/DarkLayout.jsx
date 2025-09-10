import React from "react";
import { Outlet } from "react-router-dom";
import TopNotification from "../components/TopNotification";
import HeaderMain from "../components/HeaderMain";
import { Footer } from "../components/Footer";
import PriceTicker from "../components/PriceTicker";

function DarkLayout() {
  return (
    <div className="dark-mode">
      <header className="page-header">
        <TopNotification />
        <HeaderMain mode="dark" />
      </header>
      <PriceTicker />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DarkLayout;
