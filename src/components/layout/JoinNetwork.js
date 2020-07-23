import React from "react";
// import { Link } from "react-router-dom";
// import placeholder from "../../images/placeholder.png";
import "../../assets/JoinNetwork.scss";
import publications from "../../images/publications.jpg";
const CompanyDetails = () => {
  return (
    <>
      <div className="joinNetworkContainer">
        <div className="joinNetworkMain">
          <div className="joinNetworkDiv">
            <div className="joinNetworkResources">
              <h1>Access publications on justice</h1>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://defenddefenders.org/on-the-legal-frontline-lawyers-and-paralegals-as-human-rights-defenders-in-the-east-and-horn-of-africa/"
              >
                <img
                  src={publications}
                  style={{ height: '300px' }}
                  alt="publications"
                />
              </a>
              <h5>
                DefendDefenders (2020) 'On the Legal Frontline: Lawyers and
                Paralegals as Human Rights Defenders in the East and Horn of
                Africa'
              </h5>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://defenddefenders.org/on-the-legal-frontline-lawyers-and-paralegals-as-human-rights-defenders-in-the-east-and-horn-of-africa/"
              >
                <button className="submitBtn resourcesBtn">Resources</button>
              </a>
            </div>
          </div>
          <form className="joinNetworkDiv">
            <div>
              <h1>Join the network</h1>
              <p>
                Lets share knowledge, make connections and strengthen networks
                for justice in south sudan and across Eastern Africa.
              </p>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm password" />
              <input className="submitBtn " type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
