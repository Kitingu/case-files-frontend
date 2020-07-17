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
            What do policymakers in the East and Horn of Africa need to know
            about justice, human rights, democracy peace and diversity? We
            publish reflections from academic and practical experts.
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
