import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function TradingStrategies101() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education-hub" },
    { name: "Trading Strategies 101", href: "" },
  ];

  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Trading Strategies 101"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="edu-subp-details">
        <div className="container">
          <h3 className="edu-top-title">Popular Strategies for Trading</h3>
          <p>
            Popular trading strategies include day trading, swing trading,
            scalping, trend following, and position trading. Each strategy
            focuses on different timeframes and risk profiles, aiming to
            capitalize on market movements for profit.
            <br />
            <br />
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="box-card card-shrink card-2  bgt-primary half">
                <img
                  src="/images/icons/commodity-exchange.png"
                  alt="Trading 101"
                  className="card-icon-top"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title">Position Trading</h5>
                  <p className="card-text">
                    Long-term strategy focusing on holding positions for
                    extended periods.
                  </p>
                  <Link
                    to="/education-hub/position-trading"
                    className="btn-edu rounded-btn white-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-card card-shrink card-2  bgt-primary half">
                <img
                  src="/images/icons/market-research.png"
                  alt="Your Risk Guide"
                  className="card-icon-top"
                />
                <div className="card-body mt-4">
                  <h5 className="card-title">Trend Trading</h5>
                  <p className="card-text">
                    Capturing profits by following the market’s prevailing
                    direction.
                  </p>
                  <Link
                    to="/education-hub/trend-trading"
                    className="btn-edu rounded-btn white-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TradingStrategies101;
