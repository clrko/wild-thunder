import React from "react"

import "./GameSessionAudioPlayer.css"


const GameSessionAudioPlayer = (props) => {
    return (
        <div className="container">
            {!props.isLoaded ?
                <div>Loading...</div> :
                <div id="tracks-container">
                    <h1>{props.artistTracks[0].artistName}</h1>
                    <h2>{props.artistTracks[0].name}</h2>
                    <div>
                        <audio id="audioPlayer" src={props.artistTracks[0].previewURL} controls>
                            <source type="audio/mpeg" />
                        </audio>
                    </div>
                    <button onClick={props.nextSong}>Next song!!!</button>
                </div>}
        </div>
    )
}


export default GameSessionAudioPlayer