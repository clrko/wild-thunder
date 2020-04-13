import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/"><img src="./images/logo_thunder_blue.png" alt="Log of the application"/></NavLink></li>
                    <li><NavLink to="/log_in/">Log In</NavLink></li> {/* must open the modal page */}
                    <li><NavLink to="/sign_in/">Sign In</NavLink></li>
                    <li><NavLink to="/contact/">Contact</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;