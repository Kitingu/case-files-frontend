import React from 'react'
import {Link} from 'react-router-dom'
import placeholder from '../../images/placeholder.png';
const CompanyDetails = () => {
    return (
      <>
        <div className="jumbotron">
          <div className="about">
            <h2>Use our resources in your research</h2>

            <p>
              We share data and published materials from academic research on
              law and activism in Eastern Africa, making them accesible to other
              researches and stakeholder.
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <img src={placeholder} alt="" />
              <div className="details">
                <h3>Town Court Report, Torit, South Sudan, 2015</h3>
                <Link to="#">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src={placeholder} alt="" />
              <div className="details">
                <h3>Town Court Report, Torit, South Sudan, 2015</h3>
                <Link to="#">Read More</Link>
              </div>
            </div>
            <div className="box">
              <img src={placeholder} alt="" />
              <div className="details">
                <h3>Town Court Report, Torit, South Sudan, 2015</h3>
                <Link to="#">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        
          <div className="about">
            <h2>Use our resources in your research</h2>

            <p>
              We share data and published materials from academic research on
              law and activism in Eastern Africa, making them accesible to other
              researches and stakeholder.
            </p>
         
        </div>
      </>
    );
}

export default CompanyDetails;
