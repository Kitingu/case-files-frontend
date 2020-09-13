import React from "react";
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
        <h1>Find out about our research partners</h1>
        <div className="about-partners">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://justiceafrica.org"
            >
              <img src={partner1} className="partners-image" alt="" />
              <p></p>{' '}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.lse.ac.uk/international-development/conflict-and-civil-society/conflict-research-programme"
            >
              <img src={partner2} className="partners-image" alt="" />{' '}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://defenddefenders.org"
            >
              <img src={partner3} className="partners-image" alt="" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://namati.org/network/organization/south-sudan-law-society-ssls"
            >
              <img src={partner4} className="partners-image" alt="" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gold.ac.uk/politics-and-international-relations/"
            >
              <img src={partner5} className="partners-image" alt="" />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://cepo-southsudan.org/"
            >
              <img src={partner6} className="partners-image" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
