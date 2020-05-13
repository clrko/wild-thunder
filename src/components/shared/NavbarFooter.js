import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import LogOut from './LogOut';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";

class NavbarFooter extends Component {
    state = {
        loggedIn : false
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.setState({
                loggedIn: !this.state.loggedIn
            })
        }
    }

    render(){

        return(
            <nav className="nav-bottom-container">
                <ul className="nav-links-wrapper-footer">
                    <li><NavLink className="nav-title" activeClassName ="current" to="/:pseudo"><FontAwesomeIcon icon={faHome} className="nav-icon" /></NavLink></li>
                    <li><NavLink className="nav-title" activeClassName ="current" to={this.state.loggedIn? "/userpage" : "/authentication"}><FontAwesomeIcon icon={faUser} className="nav-icon" /></NavLink></li>
                    <li className={this.state.loggedIn? "LogOut_visible" : "LogOut_none"}><LogOut/></li> 
                    <li><NavLink className="nav-title" activeClassName ="current" to="/modepage-mainrules"><FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" /></NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavbarFooter;