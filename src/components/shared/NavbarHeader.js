import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import MainLogo from "./MainLogo";
import "./Navbar.css";


class NavbarHeader extends Component {
    render(){
        return(
            <nav className="nav-container">
                <MainLogo />
                <ul className="nav-links-wrapper">
                    <li><NavLink className="nav-title" activeClassName ="current" to="/log_in/pseudo">Log In</NavLink></li> {/* must open the modal page */}
                    <li><NavLink className="nav-title" activeClassName ="current" to="/sign_in/pseudo">Sign In</NavLink></li>
                    <li><NavLink className="nav-title" activeClassName ="current" to="/contact/pseudo">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default NavbarHeader;