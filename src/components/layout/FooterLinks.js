import React from 'react';
import Back2Top from 'react-back2top';
import './partner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
const FooterLinks = (props) => {
  return (
    <div className={`foot-link ${props.color}`}>
      <div className={`footer-links ${props.color}`}>
        <div className="links">
          <h5 className="links-title">Links</h5>
          <ul className="links-list">
            <NavLink exact to="/">
              {' '}
              <span> Home </span>
            </NavLink>
            <NavLink exact to="/about">
              {' '}
              <span>About us</span>{' '}
            </NavLink>
            <NavLink exact to="/courts">
             <span>Courts </span> {' '}
            </NavLink>
            <NavLink exact to="/legal">
             <span>Legal Activitists </span> {' '}
            </NavLink>
            <NavLink exact to="/resources">
             <span>Resources </span> {' '}
            </NavLink>
            <NavLink exact to="/network">
             <span>Join the Network </span> {' '}
            </NavLink>
          </ul>
        </div>
        <div className="left-footer">
          <div className="social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com"
            >
              {' '}
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </div>
          <Back2Top>
            <div className="back-to-top">
              <span>
                <FontAwesomeIcon icon="caret-up" />
              </span>
              Back to top
            </div>
          </Back2Top>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
