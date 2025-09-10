import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import TitleBgCenter from "../components/TitleBgCenter";

function Education() {
  const breadcrumbPaths = [
    { name: "Home", href: "/" },
    { name: "Education", href: "" },
  ];

  return (
    <>
      <Header mode={"light"} />
      <TitleBgCenter
        title="Education Hub"
        description=""
        backgroundImage="/images/bg-2.png"
        breadcrumbPaths={breadcrumbPaths}
      />
      <section className="contact-details">
        <div className="container">
          <h3>Trading for beginners</h3>
          <p>
            For beginners, it’s crucial to understand the fundamentals of trading. Begin by familiarizing yourself with essential concepts, mastering risk management, exploring various markets, and gaining experience through a demo account to boost your confidence.
            <br />
            <br />
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/tp/trading-101.jpg" alt="Trading 101" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Trading 101</h5>
                  <p className="card-text">
                    Get everything you need in one place with our comprehensive beginner's guide to trading.
                  </p>
                  <Link to="/education-hub/trading-101" className="btn-edu rounded-btn blue-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/tp/risk-management.jpg" alt="Your Risk Guide" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Your Risk Guide</h5>
                  <p className="card-text">
                    Learn to manage risks effectively and trade confidently with our essential guide.
                  </p>
                  <Link to="/education-hub/risk-guide" className="btn-edu rounded-btn blue-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-details">
        <div className="container">
          <h3>Experienced Traders</h3>
          <p>
          For seasoned traders, sharpening your expertise is essential. Emphasize technical analysis, perfect your trading strategies, strengthen your trading mindset, and stay updated with detailed market insights.
            <br />
            <br />
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/tp/trading-psychology.jpg" alt="Trading 101" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Trading Strategies 101</h5>
                  <p className="card-text">
                  Learn expert trading techniques to build a solid foundation for success.
                  </p>
                  <Link to="/education-hub/trading-strategies-101/" className="btn-edu rounded-btn blue-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/tp/trading-psychology-2.jpg" alt="Your Risk Guide" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Trading Psychology</h5>
                  <p className="card-text">
                  Master the expert mental discipline needed to thrive in high-pressure trading environments.
                  </p>
                  <Link to="/education-hub/trading-psychology" className="btn-edu rounded-btn blue-btn">
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

export default Education;
