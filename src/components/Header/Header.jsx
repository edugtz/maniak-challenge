import React from 'react';
import logo from '../../bellotero.svg';
import HeaderLinks from '../HeaderLinks';
import { NavLink } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
        <div className="main-navbar">
            <NavLink to="/">
              <img className="bellotero-logo" src={logo} alt="bellotero-logo" />
            </NavLink>
            <HeaderLinks />
        </div>
    );
  }
};

export default Header;