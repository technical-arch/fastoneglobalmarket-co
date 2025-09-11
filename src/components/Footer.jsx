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
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>
                          </svg>
                        </a>
                        <span className="screen-reader">Facebook</span>
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
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
                          </svg>
                        </a>
                        <span className="screen-reader">Twitter</span>
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
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>
                          </svg>
                        </a>
                        <span className="screen-reader">Instagram</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};