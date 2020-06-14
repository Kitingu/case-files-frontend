import React from "react";
import { Link } from "react-router-dom";
import partner1 from "../../images/partner-1.png";
import partner2 from "../../images/partner-2.png";
import partner3 from "../../images/partner-3.png";
import partner4 from "../../images/partner-4.png";
import partner5 from "../../images/partner-5.png";
import partner6 from "../../images/partner-6.png";
import "../../assets/aboutPatners.scss";
export default () => {
  return (
    <>
      <div className="aboutPatnersContainer">
        <h1>Find out about our research patners</h1>
        <div className="patners">
          <div>
            <img src={partner1} className="partners-image" alt="" />
            <p>
              Goldsmith department of politics and international relationships
            </p>
          </div>
          <div>
            <img src={partner2} className="partners-image" alt="" />
            <p>Justice Africa</p>
          </div>
          <div>
            <img src={partner3} className="partners-image" alt="" />
            <p>Conflict research programme</p>
          </div>
          <div>
            <img src={partner4} className="partners-image" alt="" />
            <p>South sudan law society</p>
          </div>
          <div>
            <img src={partner5} className="partners-image" alt="" />
            <p>Community empowerment for progress organization</p>
          </div>
          <div>
            <img src={partner6} className="partners-image" alt="" />
            <p>Defend defenders</p>
          </div>
        </div>
      </div>
    </>
  );
};
