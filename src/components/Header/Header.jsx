import React from 'react';
import logo from '../../bellotero.svg';
import HeaderLinks from '../HeaderLinks';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
        <div className="main-navbar">
            <img src={logo} alt="bellotero-logo" />
            <HeaderLinks />
        </div>
    );
  }
}

export default Header;