import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder.png";
const CompanyDetails = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="about">
          <h2>Use our resources in your research</h2>

          <p>
            We share data and published materials from academic research on law
            and activism in Eastern Africa, making them accesible to other
            researches and stakeholder.
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <img src={placeholder} alt="" />
            <div className="details">
              <h5>Town Court Report, Torit, South Sudan, 2015</h5>
              <Link to="#">Read More <span>&#187;</span> </Link>
            </div>
          </div>
          <div className="box">
            <img src={placeholder} alt="" />
            <div className="details">
              <h5>Customary Court Report wau, South Sudan, 2015</h5>
              <Link to="#">Read More <span>&#187;</span></Link>
            </div>
          </div>
          <div className="box">
            <img src={placeholder} alt="" />
            <div className="details">
              <h5>Customary Court Report wau, Juba Protection of Civilians Site 2016</h5>
              <Link to="#">Read More <span>&#187;</span> </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
