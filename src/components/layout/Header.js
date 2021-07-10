import React from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../images/logo.jpg';
import NavBar from './Nav';
const Header = () => {
   
  return (
    <div>
      <div className="topbar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="top-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com"
            alt="Facebook"
          >
            {' '}
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com"
            alt="Twitter"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com"
            alt="Linked in"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com"
            alt="Instagram"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
