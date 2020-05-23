import React from "react";

import "./GameSessionAudioPlayer.css";

const GameSessionAudioPlayer = (props) => {
    const revealedSolution = props.revealedSolution
    return (
        <div className="container">
            <div id="tracks-container">
                {revealedSolution &&
                    <>
                        <h1 className="GameSessionAudioPlayer-h1" >{props.artistTrack.artistName}</h1>
                        <h2 className="GameSessionAudioPlayer-h2">{props.artistTrack.name}</h2>
                    </>
                }
                <div>
                    <audio id="audioPlayer" src={props.artistTrack.previewURL}>
                        <source type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
    )
}

export default GameSessionAudioPlayer;