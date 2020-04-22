import React from "react"


const EndSessionTrackList = props => {
    return (
        <div>
            <p>{props.sessionHistory.name}</p>
            <p>{props.sessionHistory.artistName}</p>
            <audio id="audioPlayer" src={props.sessionHistory.previewURL} controls>
                <source type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default EndSessionTrackList