import React, { Component } from "react"

import EndSessionTrackList from  "./EndSessionTrackList"

class EndSession extends Component {
    render() {
        console.log(this.props.location)
        console.log(this.props.location.state)
        return (
            <div>
                Hello
                <EndSessionTrackList />

            </div>
        )
    }
}

export default EndSession