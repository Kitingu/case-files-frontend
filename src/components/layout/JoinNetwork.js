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
              <h1>Read publications on law and activism</h1>
              <img
                src={publications}
                style={{ height: "300px" }}
                alt="publications"
              />
              <h5>
               DefendDefenders (2020) 'On the legal Frontline: Lawyers and Paralegals as Human Rights Defenders in the East and Horn of Africa'
              </h5>
              <button className="submitBtn resourcesBtn">Resources</button>
            </div>
          </div>
          <form className="joinNetworkDiv">
            <div>
              <h1>Join the network</h1>
              <p>
                Lets share knowledge, make connections and strengthen networks for justice in south sudan and across Eastern Africa.  
              </p>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
              <input className="submitBtn " type="submit" placeholder="Name" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
