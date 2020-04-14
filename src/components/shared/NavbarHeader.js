import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import MainLogo from "./MainLogo";
import "./Navbar.css"


class NavbarHeader extends Component {
    render(){
        return(
            <nav className="nav-container">
                <MainLogo />
                <ul className="nav-links-wrapper">
                    <li><NavLink to="/log_in/">Log In</NavLink></li> {/* must open the modal page */}
                    <li><NavLink to="/sign_in/">Sign In</NavLink></li>
                    <li><NavLink to="/contact/">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default NavbarHeader;