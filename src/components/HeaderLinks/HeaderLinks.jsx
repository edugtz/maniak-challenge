import React, { Component } from 'react';
import './HeaderLinks.scss';

class HeaderLinks extends Component {
    render() {
        return(
            <nav className="nav-container">
                <ul className="bellotero-nav" role="navigation">
                    <li className="bellotero-nav__item">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Solutions</a>
                    </li>
                    <li>
                        <a href="#">Stories</a>
                    </li>
                    <li>
                        <a href="#">Partners</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default HeaderLinks;