import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';
import '../../assets/Blog.scss';
import justice from '../../images/justice.jpeg';
import democracy from '../../images/democracy.jpeg';
import peace from '../../images/peace.jpeg';
const CompanyDetails = () => {
  return (
    <>
      <div className="blogContainer">
        <div className="blogMain">
          <div className="blog-header">
            <h1 className="title">Read our blog on citizen activism</h1>

            <p className="description"> 
             Lawyers, paralegals and citizens in South Sudan are working 
             to improve the justice system  'from below' despite limited resources 
             and constant risks. we narrate some of their experiences...
            </p>
          </div>
          <div className="blogs">
            <div className="blog">
              <img src={justice} />
              <h4>Justice</h4>
            </div>
            <div className="blog">
              <img src={democracy} />
              <h4>Democracy</h4>
            </div>
            <div className="blog">
              <img src={peace} />
              <h4>Peace</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
