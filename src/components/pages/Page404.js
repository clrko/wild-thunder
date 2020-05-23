import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import vinyl from "../../images/vinyl.png";

import "./Page404.css";

class Page404 extends React.Component {
    render() {
        return (
            <div className="page404_container">
                <h1>404</h1>
                <h2>Page Not Found ...</h2>
                <img src={vinyl} alt="Vinyl" className="page404_vinyl" />
                <NavLink to="/"><button className="page404_button"><FontAwesomeIcon icon={faHome} className="page404_icon" /></button></NavLink>
            </div>
        )
    }
}

export default Page404;

