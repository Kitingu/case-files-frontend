import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../images/placeholder.png";
import "../../assets/Blog.scss";
import publications from "../../images/publications.jpg";
const CompanyDetails = () => {
  return (
    <>
      <div className="blogContainer">
        <div className="blogMain">
          <div className="header">
            <h1 className="title">Read our blog on citizen activism</h1>
            <p className="description">
              We share data and published materials from academic research on
              law and activism in Eastern Africa, making them accesible to other
              researches and stakeholder.
            </p>
          </div>
          <div className="blogs">
            <div className="blog">
              <img src={publications} />
              <h4>Justice</h4>
            </div>
            <div className="blog">
              <img src={publications} />
              <h4>Democracy</h4>
            </div>
            <div className="blog">
              <img src={publications} />
              <h4>Peace</h4>
            </div>
          </div>
          <button className="legalActivities">Legal activities</button>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
