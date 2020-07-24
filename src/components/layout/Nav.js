import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav.scss';

const Nav = () => {
  const [state, setState] = useState({
    isExpanded: false,
  });

  const onChange = (e) => {
    e.preventDefault();
    return setState({
      isExpanded: !state.isExpanded,
    });
  };

  return (
    <>
      {state.isExpanded && <div className="hide-nav" onClick={onChange} />}
      <nav className="nav">
        <FontAwesomeIcon
          icon="bars"
          className="fa fa-bars"
          onClick={onChange}
        />
        <div
          onClick={onChange}
          className={`collapsed ${state.isExpanded ? 'is-expanded' : ''}`}
        >
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact={true} to="/about">
            About Us
          </NavLink>
          <NavLink exact={true} to="/courts">
            Courts
          </NavLink>
          <NavLink exact={true} to="/legal">
            Legal Activists
          </NavLink>
          <NavLink exact={true} to="/resources">
            resources
          </NavLink>
          <NavLink exact={true} to="/blog">
            Blog
          </NavLink>
          <NavLink exact={true} to="/archives">
            Archives
          </NavLink>
          <div className="search">
            <FontAwesomeIcon icon="search" className="nav-icon" />
          </div>

          <NavLink exact={true} className="menu-left" to="/signup">
            Join the network{' '}
            <FontAwesomeIcon className="nav-icon" icon="arrow-right" />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
