import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import LogOut from './LogOut';
import MainLogo from "./MainLogo";

import "./Navbar.css";


class NavbarHeader extends Component {
    state = {
        loggedIn: false
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.setState({
                loggedIn: !this.state.loggedIn
            })
        }
    }

    render() {
        return (
            <nav className="nav-container">
                <MainLogo />
                <ul className="nav-links-wrapper">
                    <li><NavLink className="nav-title" activeClassName="current" to={this.state.loggedIn ? "/userpage" : "/authentication"}><FontAwesomeIcon icon={faUser} className="faUser" /></NavLink></li>
                    <li className={this.state.loggedIn ? "LogOut_visible faSignOutAlt" : "LogOut_none"}><LogOut /></li>
                    <li><NavLink className="nav-title" activeClassName="current" to="/contact/pseudo"><FontAwesomeIcon icon={faEnvelope} className="faEnvelope" /></NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default NavbarHeader