import React from 'react'
import Back2Top from 'react-back2top';
import './partner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FooterLinks = (props) => {
    return (
      <div className={`foot-link ${props.color}`}>
        <div className={`footer-links ${props.color}`}>
          <div className="links">
            <h5 className="links-title">Links</h5>
            <ul className="links-list">
              <li>About us</li>
              <li>Courts</li>
              <li>Legal Activitism</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>Join the Network</li>
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
}

export default FooterLinks
