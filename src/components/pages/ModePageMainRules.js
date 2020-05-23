import React from "react";
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import "./ModePageMainRules.css"

const ModePageMainRules = (props) => {
    const username = props.username
    return (
        <div className="rules_wrapper">
            <div className="rules_container">
                <h1>Main Rules</h1>
                <div id="rules_thunder">
                    <h2>What is Thunder?</h2>
                    <p>Thunder is a music quiz website simple to use and completely free that help you enrich your musical knowledge.<br /><br />You don't need to register to start a game. Just choose a theme, choose a game mode and enjoy! </p>
                </div>

                <div id="rules_registration">
                    <h2>Registration</h2>
                    <p> Registration allows you to fully enjoy a taylored game experience:</p>
                    <br />
                    <ul>
                        <li>choosing your profile</li>
                        <li>personalized recommendations</li>
                        <li>creating private playlists</li>
                        <li>appearing in the ranking</li>
                    </ul>
                </div>
                <div id="rules_cards">
                    <p>Here is an overview of the mode, the profiles and the ranking.</p>
                </div>

                <div id="rules_points">
                    <h2>Point counting</h2>
                    <p>
                        You'll have 30 seconds to answer each question.<br />
                            The faster you guess, the higher your score! <br />
                            Your score will equal to the remaining seconds in the time counter.
                        </p>
                </div>
                {
                    props.location ?
                        <NavLink className="return-mode-page-btn" to={{ pathname: `/mode-page/${props.location.state}`, state: props.location.state }} ><FontAwesomeIcon icon={faTimes} className="return-icon" /></NavLink>
                        :
                        <NavLink className="return-mode-page-btn" to={{ pathname: `/mode-page/${username}`, state: username }} ><FontAwesomeIcon icon={faTimes} className="return-icon" /></NavLink>
                }
            </div>
        </div>
    )
}

export default ModePageMainRules;