import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../../assets/legal-activism/legal.scss';
import legalData from './legal-narratives';
import { Link } from 'react-router-dom';
import CourtsHero from '../courts/CourtsHero';
import justice from '../../images/justice.jpeg';
import hero2 from '../../images/activism-2.jpg';
import hero4 from '../../images/activism-4.jpg';



const LegalDetails = () => {
  const [current, setCurrent] = useState(1);

  const currentPage = (current)=>{
    switch (current) {
      case 2:
       return <CourtsHero backgroundImage={hero4} />

       case 3:
       return <CourtsHero backgroundImage={justice} />

       case 4:
       return <CourtsHero backgroundImage={hero2} />
    
      default:
        return <CourtsHero backgroundImage={justice} />
    }
  }

  return (
    <>
    {currentPage(current)}
      <div className="jumbotron">
        <div className="court-details legal-main">
          <h3>Legal Activism</h3>
          <p>
            Lawyers, paralegals and citizen activists are struggling to improve
            the justice system ‘from below’ against harsh odds. Too often their
            work goes unrecognized and unsupported. Many of them work
            voluntarily, under constant pressure or at great personal risk. We
            feature individual stories of legal activism at the grassroots,
            illustrating innovative efforts to promote access to justice and
            basic rights and to document and reflect upon these initiatives.
          </p>
          <p>
            The legal activists featured are also in many cases researchers and
            network members. Their work has informed international research
            projects and contributed to research materials in the archive and on
            the site. Justice Networks serves as a platform to highlight their
            concerns and to showcase their struggles and achievements.
          </p>
        </div>
      </div>
      <div className="legal-naratives">
        <h2>Legal Activists narratives</h2>
        <div className="legal-boxes">
          {legalData.map((narrative) => (
            
            <div className={`legal-box current-${narrative.id=== current}`}>
              <h4>{narrative.header}</h4>
              <h4>{narrative.author} </h4>
              <Link
                onClick={() => {
                  setCurrent(narrative.id);
                }}
              >
                Read More <span>&#187;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="legal-body">
        {legalData
          .filter((narrative) => narrative.id === current)
          .map((narrative) => (
            <div>{ReactHtmlParser(narrative.content)}</div>
          ))}
      </div>
    </>
  );
};

export default LegalDetails;
