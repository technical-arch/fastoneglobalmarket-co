import { Outlet } from "react-router-dom";
import TopNotification from "../components/TopNotification";
import { Footer } from "../components/Footer";

function RootNoTicker() {

  return (
    <div className="root-container">
      <div className="above-header">
        <TopNotification />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootNoTicker;
