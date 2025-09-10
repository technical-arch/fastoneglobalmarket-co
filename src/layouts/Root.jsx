import { Outlet } from "react-router-dom";
import TopNotification from "../components/TopNotification";
import { Footer } from "../components/Footer";
import PriceTicker from "../components/PriceTicker";

function Root() {

  return (
    <div className="root-container">
      <div className="above-header">
        <TopNotification />
        <PriceTicker />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
