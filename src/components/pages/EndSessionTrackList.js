import React from "react"


const EndSessionTrackList = props => {
    return (
        <div>
            <p>{props.sessionHistory.name}</p>
            <p>{props.sessionHistory.artistName}</p>
            <p>{props.sessionHistory.previewURL}</p>
        </div>
        
    )
}

export default EndSessionTrackList