import React from 'react';
import './Cta2Btn.css';
const Cta2Btn = ({ title, description, button1, button2, buttonLinks }) => {
  return (
    <div className="row cta2btn">
      <div className="col-12">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <a href={buttonLinks[0]} className="btn-one rounded-btn white-btn">
            {button1}
          </a>
          <a href={buttonLinks[1]} className="btn-one rounded-btn white-btn ms-2">
            {button2}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta2Btn;
