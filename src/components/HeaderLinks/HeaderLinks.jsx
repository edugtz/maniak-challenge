import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { getAppData } from '../../api/api';
import './HeaderLinks.scss';

class HeaderLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: []
        };
    };

    componentDidMount() {
        getAppData()
            .then(response => {
                this.setState(() => {
                    return {
                        menuItems: response.data.menu.items
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const { menuItems } = this.state;
        return(
            <nav className="nav-container">
                <ul className="bellotero-nav" role="navigation">
                    {menuItems.length !== 0 &&
                        menuItems.map((item, index) => {
                            return (
                                <li className="bellotero-nav__item">
                                    <NavLink
                                        activeClassName="active-item" 
                                        key={`${index}-${item.text}`} 
                                        to={`/${item.route}`} >{item.text}
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                    {/* <li className="bellotero-nav__item">
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
                    </li> */}
                </ul>
            </nav>
        );
    }
};

export default withRouter(HeaderLinks);