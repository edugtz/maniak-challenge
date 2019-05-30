import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { getAppData } from '../../api/api';
import './HeaderLinks.scss';

class HeaderLinks extends Component {

    componentDidMount() {
        getAppData()
            .then(response => console.log(response.data.menu));
    }

    render() {
        return(
            <nav className="nav-container">
                <ul className="bellotero-nav" role="navigation">
                    <li className="bellotero-nav__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="bellotero-nav__item">
                        <a href="#">Solutions</a>
                    </li>
                    <li className="bellotero-nav__item">
                        <a href="#">Stories</a>
                    </li>
                    <li className="bellotero-nav__item">
                        <a href="#">Partners</a>
                    </li>
                    <li className="bellotero-nav__item">
                        <a href="#">About</a>
                    </li>
                    <li className="bellotero-nav__item">
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default withRouter(HeaderLinks);