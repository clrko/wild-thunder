import React from "react";

import "./GameSessionAudioPlayer.css";

const GameSessionAudioPlayer = (props) => {
    return (
        <div className="container">
                <div id="tracks-container">
                    <h1 className="h1-hidden">{props.artistTrack.artistName}</h1>
                    <h2 className="h2-hidden">{props.artistTrack.name}</h2>
                    <div>
                        <audio id="audioPlayer" src={props.artistTrack.previewURL} /* controls */>
                            <source type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
        </div>
    )
}

export default GameSessionAudioPlayer;