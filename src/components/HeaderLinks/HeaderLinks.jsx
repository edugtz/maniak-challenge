import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { getAppData } from '../../api/api';
import './HeaderLinks.scss';

const HeaderLinks = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        getAppData()
            .then(response => {
                setMenuItems(response.data.menu.items);
            })
            .catch(err => {
                console.log(err);
            });
        
    }, []);
    
    return (
        <nav className="nav-container">
            <ul className="bellotero-nav" role="navigation">
                {menuItems.length !== 0 &&
                    menuItems.map((item, index) => {
                        return (
                            <li key={`${index}-${item.text}`} 
                                className="bellotero-nav__item">
                                <NavLink
                                    activeClassName="active-item" 
                                    key={`${index}-${item.route}`} 
                                    to={`/${item.route}`} >{item.text}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};

export default withRouter(HeaderLinks);