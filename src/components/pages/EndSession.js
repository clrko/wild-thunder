import React, { Component } from "react";
import {NavLink , Link} from "react-router-dom";

import EndSessionShare from './EndSessionShare'
import EndSessionTrackList from  "./EndSessionTrackList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import "./EndSession.css";
import EndSessionReco from "./EndSessionReco";


class EndSession extends Component {
    render() {
        return (
            <div className="endsession-container">
                <h1>The tracklist of your game session :</h1>
                {this.props.location.state.map((track,i) => <EndSessionTrackList key={i} sessionHistory={track} />)}
                <EndSessionShare/>
                <EndSessionReco artistId={this.props.location.state}/>
                <NavLink to="/" className="goHome_button"><button><FontAwesomeIcon icon={faHome} className="goHome_icon" /></button></NavLink>
            </div>
        )
    }
}
 //<Link to={{pathname :'./endsessionreco' , artistId : this.props.location.state }}>Artist similaire</Link>
export default EndSession;