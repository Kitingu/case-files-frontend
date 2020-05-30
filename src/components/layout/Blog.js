import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';
import '../../assets/Blog.scss';
import service_1 from '../../images/service_1.jpeg';
import service_4 from '../../images/service_4.jpeg';
import service_2 from '../../images/service_3.jpeg';
const CompanyDetails = () => {
  return (
    <>
      <div className="blogContainer">
        <div className="blogMain">
          <div className="about">
            <h2>Read our blog on citizen activism</h2>

            <p>
             Lawyers, paralegals and citizens in South Sudan are working 
             to improve the justice system  'from below' despite limited resourcws 
             and constant risks. we narrate some of their experiences...
            </p>
          </div>
          <div className="blogs">
            <div className="blog">
              <img src={service_1} />
              <h4>Justice</h4>
            </div>
            <div className="blog">
              <img src={service_4} />
              <h4>Democracy</h4>
            </div>
            <div className="blog">
              <img src={service_2} />
              <h4>Peace</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
