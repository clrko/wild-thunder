import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from "../../images/logo_thunder_blue.png";

import "./MainLogo.css"

function MainLogo() {
    return (
        <NavLink to="/">
            <div className="mainLogo">
                <img src={logo} alt="Logo of the application" />
            </div>
        </NavLink>
    )
}

export default MainLogo;