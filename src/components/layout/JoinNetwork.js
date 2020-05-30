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
                Join theWe share data and published materials from academic
                research on law and activism in Eastern Africa, making them
                accesible to other researches and stakeholder. network
              </h5>
              <button className="submitBtn resourcesBtn">Resources</button>
            </div>
          </div>
          <form className="joinNetworkDiv">
            <div>
              <h1>Join the network</h1>
              <p>
                Join the We share data and published materials from academic
                research on law and activism in Eastern Africa, making them
                accesible to other researches and stakeholder.network
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
