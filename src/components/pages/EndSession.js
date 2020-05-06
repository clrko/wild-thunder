import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import EndSessionTrackList from  "./EndSessionTrackList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import MainLogo from "../shared/MainLogo";
import "./EndSession.css";
import EndSessionScore from "./EndSessionScore";
import EndSessionRank from "./EndSessionRank";

class EndSession extends Component {
    
    render() {
        const score = this.props.location.score
        const username = this.props.location.username
        return (
            <div className="endsession-container">
                <MainLogo/>
                <h1>THUNDER</h1>
                <div className='score_rank' >
                    <EndSessionScore score={score}/>
                    <EndSessionRank  score={score} username={username}/>
                </div>   
                <h1>The tracklist of your game session :</h1>
                {this.props.location.state.map((track,i) => <EndSessionTrackList key={i} sessionHistory={track} />)}
                <NavLink to="/" className="goHome_button"><button><FontAwesomeIcon icon={faHome} className="goHome_icon" /></button></NavLink>
            </div>
        )
    }
}

export default EndSession;