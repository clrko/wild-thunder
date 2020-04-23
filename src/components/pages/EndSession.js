import React, { Component } from "react"

import EndSessionTrackList from  "./EndSessionTrackList"

import "./EndSession.css"

class EndSession extends Component {
    render() {
        console.log("4propslcoation state:", this.props.location.state)
        return (
            <div className="endsession-container">
                <h1>The tracklist of your game session :</h1>
                {this.props.location.state.map(track => <EndSessionTrackList sessionHistory={track} />)}
            </div>
        )
    }
}

export default EndSession