import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="start-la">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h3 className="text-white font-weight-bold">
                Instant Account - Trade Within Minutes!
              </h3>
            </div>
            <div className="col-12 col-md-6 text-center">
              <a
                href="https://my.fastoneglobalmarkets.co/en/register"
                className="btn-one rounded-btn white-btn"
              >
                Start Live Account
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <section>
          <div className="container">
            <div className="footer-menu row">
              <div className="menu-wrapper col-md-3">
                <div className="footer-menu-title">
                  <h2>Compare</h2>
                  <p>Trade with FastOne</p>
                </div>
                <ul>
                  <li>
                    <Link to="/pricing-model">Trading Costs</Link>
                  </li>
                  <li>
                    <Link to="/account-comparison">Accounts</Link>
                  </li>
                  <li>
                    <Link to="/deposits-and-withdrawls">
                      Deposits and Withdrawals
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/introducing-broker">Partner with Fastone</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-wrapper col-md-3">
                <div className="footer-menu-title">
                  <h2>Trading</h2>
                  <p>Market & Tools</p>
                </div>
                <ul>
                  <li>
                    <Link to="/currencies">Trading Currencies CFDs</Link>
                  </li>
                  <li>
                    <Link to="/metals">Trading Metal CFDs</Link>
                  </li>
                  <li>
                    <Link to="/energy">Trading Energy CFDs</Link>
                  </li>
                  <li>
                    <Link to="/indices">Trading Index CFDs</Link>
                  </li>
                  <li>
                    <Link to="/futures">Trading Futures</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-wrapper col-md-3">
                <div className="footer-menu-title">
                  <h2>Insights</h2>
                  <p>Educational Materials</p>
                </div>
                <ul>
                  <li>
                    <Link to="">Events & Webinars</Link>
                  </li>
                  <li>
                    <Link to="/market-updates">News & Media</Link>
                  </li>
                </ul>
                <div className="footer-menu-title">
                  <p>Trader Tools</p>
                </div>
                <ul>
                  <li>
                    <Link to="/desktop/metatrader4"> MetaTrader 4</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-wrapper col-md-3">
                <div className="footer-menu-title">
                  <h2>More</h2>
                  <p>Legal Information</p>
                </div>
                <ul>
                  <li>
                    <Link to="/contact">Talk to us</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <a href="/docs/fastone-client-agreement.pdf">
                      Legal Documents & Disclosures
                    </a>
                  </li>
                </ul>
                <div className="footer-menu-title">
                  <h2>Follow Us</h2>
                  <p>Social Media</p>
                </div>
                <div className="follow-us">
                  <div className="footer-social">
                    <ul className="d-flex">
                      <li>
                        <a
                          href="https://www.facebook.com/FastoneMarkets"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/Fastone_Markets"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/fastone_global/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052..."></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-comapny-select">
              <Link to="/faqs" style={{ color: "black" }}>FAQs</Link>
              <Link to="/legal" style={{ color: "black" }}>Legal</Link>
              <Link to="/data-protection" style={{ color: "black" }}>Data Protection</Link>
              <Link to="/complaints" style={{ color: "black" }}>Complaints</Link>
            </div>

            <div className="footer-bottom row">
              <div className="col-md-4">
                <p>
                  © FastOne Global Financial Markets Limited All rights
                  reserved.
                </p>
                <p>Regulated by the FSC Under License No. C113011860</p>
                <p>Regulated by SCA under License No. 20200000326</p>
              </div>
              <div className="col-md-4">
                <p>
                  CFDs (contract for difference), forwards, options, other
                  derivatives, financial, commodities and leveraged
                  products/instruments/contracts on margin carry high risks, and
                  may not be suitable for all traders/clients and investors.
                  Before deciding to trade these products, financial and
                  commodity instruments including those offered by FastOne
                  Global Financial Markets Limited ("FastOne"), a client should
                  carefully consider his/her expertise, knowledge, objectives,
                  financial situation, needs and level of experience. FastOne is
                  a registered Global Business License company having investment
                  dealer license (full services) and regulated by FSC (Financial
                  Services Commission), Mauritius. FastOne either directly,
                  through its' associate company/companies and/or third party
                  may provide general advice, reports, news, data and other
                  materials that do not take into account specific objectives,
                  financial situation or needs of individual clients.
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  The content of this website must not be construed as personal
                  advice or as an attempt by the FastOne to solicit business or
                  an attempt of persuasion for trading. The possibility exists
                  that a client could sustain a loss of some or all of his/her
                  deposited funds and therefore, client should not speculate
                  with capital that he/she cannot afford to lose. A client
                  should be very aware of all the risks associated with trading
                  on margin and associated financial risk. FastOne recommends
                  its' clients to seek advice from an independent financial
                  advisor and/or apply his/her own prudent decision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};