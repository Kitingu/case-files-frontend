import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder.png";
import placeholder2 from '../../images/placeholder2.png';
import placeholder3 from '../../images/placeholder3.png';
const CompanyDetails = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="about">
          <h2>Explore our resources in the archive</h2>

          <p>
            We share data and published materials from academic research on
            justice in Eastern Africa, making them accessible to other
            researchers and stakeholders.
          </p>
        </div>
        <div className="boxes">
          <div className="box">
            <img src={placeholder} alt="" />
            <div className="details">
              <h5>Town Court Report, Torit, South Sudan, 2015</h5>
              <Link to="#">
                Read More <span>&#187;</span>{' '}
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={placeholder2} alt="" />
            <div className="details">
              <h5>Customary Court Report, Wau, South Sudan, 2015</h5>
              <Link to="#">
                Read More <span>&#187;</span>
              </Link>
            </div>
          </div>
          <div className="box">
            <img src={placeholder3} alt="" />
            <div className="details">
              <h5>
                Customary Court Report, Juba Protection of Civilians Site
                2016
              </h5>
              <Link to="#">
                Read More <span>&#187;</span>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
