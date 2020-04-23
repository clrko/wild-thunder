import React, { Component } from "react"

import EndSessionTrackList from  "./EndSessionTrackList"

class EndSession extends Component {
    render() {
        console.log("4propslcoation state:", this.props.location.state)
        return (
            <div>
                <p>The results of your game session :</p>
                {this.props.location.state.map(track => <EndSessionTrackList sessionHistory={track} />)}
            </div>
        )
    }
}

export default EndSession