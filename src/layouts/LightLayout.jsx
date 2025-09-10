import React from "react";
import { Outlet } from "react-router-dom";
import TopNotification from "../components/TopNotification";
import HeaderMain from "../components/HeaderMain";
import { Footer } from "../components/Footer";
import PriceTicker from "../components/PriceTicker";

function LightLayout() {
  return (
    <div className="light-mode">
      <header className="page-header">
        <TopNotification />
        <HeaderMain mode="light" />
      </header>
      <PriceTicker />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LightLayout;
