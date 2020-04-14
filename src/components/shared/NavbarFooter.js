import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css"


class NavbarFooter extends Component {
    render(){
        return(
            <nav className="nav-bottom-container">
                <ul className="nav-links-wrapper">
                    <li><NavLink to="/"><FontAwesomeIcon icon={faHome} /></NavLink></li> {/* must lead to the homepage*/}
                    <li><NavLink to="/sign_in"><FontAwesomeIcon icon={faUser} /></NavLink></li>
                    {/* <li><NavLink to="/sign_in"><FontAwesomeIcon icon={faArrowUp} /></NavLink></li> */}
                </ul>
            </nav>
        );
    }
}
export default NavbarFooter;