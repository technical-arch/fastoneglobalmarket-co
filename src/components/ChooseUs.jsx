import React from "react";
import FeaturesGrid from "./FeaturesGrid";

const advantages = [
  {
    icon: '/images/icons/donation.png',
    description: 'We donate 51% of our profits to charitable institutions. Every penny you pay in cost contributes to the needy.',
  },
  {
    icon: '/images/icons/statistics.png',
    description: 'Zero spreads for your first 10 Trades.',
  },
  {
    icon: '/images/icons/latency.png',
    description: 'Zero Latency in Execution.',
  },
  {
    icon: '/images/icons/security-system.png',
    description: 'Trusted Trading Platforms.',
  },
  {
    icon: '/images/icons/verified.png',
    description: 'Trusted Regulations.',
  },
  {
    icon: '/images/icons/transparency.png',
    description: 'No Dealing Desk (NDD) Execution, ensuring transparency and fairness.',
  },
  {
    icon: '/images/icons/data-integration.png',
    description: 'We utilize STP technologies, ensuring our commitment to order execution integrity.',
  },
  {
    icon: '/images/icons/risk.png',
    description: 'Minimised Risk: With internal order matching and risk management, we keep interference to a minimum.',
  },
];

const ChooseUs = () => {
  return (
    <section className="sp-5">
      <div className="container">
        <div className="text-center">
          <h2> Experience Fastone Markets</h2>
          <p>
            FASTONE provides a comprehensive suite of tools and resources
            designed to empower traders of all levels. Our commitment to
            excellence is reflected in our extensive educational library,
            in-depth market analysis, and powerful trading tools.
          </p>
        </div>
        <h3>Advantages with Fastone</h3>
        <FeaturesGrid advantages={advantages} />
      </div>
    </section>
  );
};

export default ChooseUs;
