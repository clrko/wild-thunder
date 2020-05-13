import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import MainLogo from "./MainLogo";
import "./Navbar.css";

class NavbarHeader extends Component {
    render(){
        return(
            <nav className="nav-container">
                <MainLogo />
                <ul className="nav-links-wrapper">
                    <li><NavLink className="nav-title" activeClassName ="current" to="/log_in/pseudo"><FontAwesomeIcon icon={faUser} className="faUser" /></NavLink></li> 
                    <li><NavLink className="nav-title" activeClassName ="current" to="/sign_in/pseudo"><FontAwesomeIcon icon={faSignOutAlt} className="faSignOutAlt" /></NavLink></li>
                    <li><NavLink className="nav-title" activeClassName ="current" to="/contact/pseudo"><FontAwesomeIcon icon={faEnvelope} className="faEnvelope" /></NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default NavbarHeader;