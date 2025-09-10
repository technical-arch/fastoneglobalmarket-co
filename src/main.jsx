import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Root from "./layouts/Root.jsx";
import RootNoTicker from "./layouts/RootNoTicker.jsx"; // Import RootNoTicker
import Home from "./pages/Home.jsx";
import PricingModel from "./pages/PricingModel.jsx";
import ErrorPage from "./error-page.jsx";
import AccountComparison from "./pages/AccountComparison.jsx";
import Currencies from "./pages/Currencies.jsx";
import Metals from "./pages/Metals.jsx";
import Energy from "./pages/Energy.jsx";
import Indices from "./pages/Indices.jsx";
import Futures from "./pages/Futures.jsx";
import AboutFastone from "./pages/AboutFastone.jsx";
import KycAml from "./pages/KycAml.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import WhyChooseUS from "./pages/WhyChooseUS.jsx";
import IntroducingBroker from "./pages/IntroducingBroker.jsx";
import Affiliate from "./pages/Affiliate.jsx";
import Influencer from "./pages/Influencer.jsx";
import DesktopMetaTrader4 from "./pages/DesktopMetaTrader4.jsx";
import DesktopMetaTrader5 from "./pages/DesktopMetaTrader5.jsx";
import MobileMetaTrader4 from "./pages/MobileMetaTrader4.jsx";
import MobileMetaTrader5 from "./pages/MobileMetaTrader5.jsx";
import WebMetaTrader4 from "./pages/WebMetaTrader4.jsx";
import UpdateNewsButton from "./components/UpdateNewsButton.jsx";
import MarketUpdates from "./pages/MarketUpdates.jsx";
import FixTest from "./pages/FixTest.jsx";
import Faqs from "./pages/Faqs.jsx";
import DepositsWithdrawls from "./pages/DepositsWithdrawls.jsx";
import Education from "./pages/Education.jsx";
import Trading101 from "./pages/Trading101.jsx";
import RiskGuide from "./pages/RiskGuide.jsx";
import TradingPsychology from "./pages/TradingPsychology.jsx";
import TradingStrategies101 from "./pages/TradingStrategies101.jsx";
import PositionTrading from "./pages/PositionTrading.jsx";
import TrendTrading from "./pages/TrendTrading.jsx";
import DepositFund from "./pages/DepositFund"; // Import DepositFund page
import PaymentConfirmation from "./pages/PaymentConfirmation"; // Import PaymentConfirmation page
import CheesePayPaymentConfirmation from "./pages/CheesePayPaymentConfirmation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add this new route for Deposit Fund
      {
        path: "deposit-fund",
        element: <DepositFund />,  // Add DepositFund here
      },
      // Add this new route for Deposit Fund
      {
        path: "cheese-pay-payment-confirmation",
        element: <CheesePayPaymentConfirmation />,  // Add DepositFund here
      },
      {
        path: "payment-confirmation",
        element: <PaymentConfirmation />,  // Add DepositFund here
      },
      {
        path: "pricing-model",
        element: <PricingModel />,
      },
      {
        path: "account-comparison",
        element: <AccountComparison />,
      },
      {
        path: "metals",
        element: <Metals />,
      },
      {
        path: "energy",
        element: <Energy />,
      },
      {
        path: "indices",
        element: <Indices />,
      },
      {
        path: "futures",
        element: <Futures />,
      },
      {
        path: "about",
        element: <AboutFastone />,
      },
      {
        path: "why-choose-us",
        element: <WhyChooseUS />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "kyc-aml",
        element: <KycAml />,
      },
      {
        path: "introducing-broker",
        element: <IntroducingBroker />,
      },
      {
        path: "affiliate",
        element: <Affiliate />,
      },
      {
        path: "influencer",
        element: <Influencer />,
      },
      {
        path: "desktop/metatrader4",
        element: <DesktopMetaTrader4 />,
      },
      {
        path: "desktop/metatrader5",
        element: <DesktopMetaTrader5 />,
      },
      {
        path: "mobile/metatrader4",
        element: <MobileMetaTrader4 />,
      },
      {
        path: "mobile/metatrader5",
        element: <MobileMetaTrader5 />,
      },
      {
        path: "web/metatrader4",
        element: <WebMetaTrader4 />,
      },
      {
        path: "web/metatrader5",
        element: <WebMetaTrader4 />,
      },
      {
        path: "market-updates",
        element: <MarketUpdates />,
      },
      {
        path: "update-news-manually",
        element: <UpdateNewsButton />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },
      {
        path: "deposits-and-withdrawls",
        element: <DepositsWithdrawls />,
      },
      {
        path: "education-hub",
        element: <Education />,
      },
      {
        path: "education-hub/trading-101",
        element: <Trading101 />,
      },
      {
        path: "education-hub/risk-guide",
        element: <RiskGuide />,
      },
      {
        path: "education-hub/trading-psychology",
        element: <TradingPsychology />,
      },
      {
        path: "education-hub/trading-strategies-101",
        element: <TradingStrategies101 />,
      },
      {
        path: "education-hub/position-trading",
        element: <PositionTrading />,
      },
      {
        path: "education-hub/trend-trading",
        element: <TrendTrading />,
      },
    ],
  },
  {
    path: "/currencies",
    element: <RootNoTicker />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Currencies />,
      },
      {
        path: "fix-test",
        element: <FixTest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
