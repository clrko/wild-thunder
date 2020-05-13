import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import LogOut from './LogOut';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";

class NavbarFooter extends Component {
    state = {
        loggedIn : false,
        username: ""
    }

    getUsername() {
        if (localStorage.getItem("token")) {
            this.setState({
                loggedIn: true
            })
            
            axios.get("http://localhost:4242/auth", {
                headers: {
                    'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                this.setState({
                    username: res.data[0].username
                })
            });
        } else {
            this.setState({
                loggedIn: false
            })
        }
    }

    componentDidMount() {
        this.getUsername()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.username !== this.state.username) {
            this.getUsername()
        }
      }

    render(){

        return(
            <nav className="nav-bottom-container">
                <ul className="nav-links-wrapper-footer">
                    <li><NavLink className="nav-title" activeClassName ="current" to={{pathname: `/mode-page/${this.state.username}`, username:this.state.username}}><FontAwesomeIcon icon={faHome} className="nav-icon" /></NavLink></li>
                    <li><NavLink className="nav-title" activeClassName ="current" to={this.state.loggedIn? "/userpage" : "/authentication"}><FontAwesomeIcon icon={faUser} className="nav-icon" /></NavLink></li>
                    <li className={this.state.loggedIn? "LogOut_visible" : "LogOut_none"}><LogOut/></li> 
                    <li><NavLink className="nav-title" activeClassName ="current" to="/modepage-mainrules"><FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" /></NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavbarFooter;