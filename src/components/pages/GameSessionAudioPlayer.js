import React from "react"
import {Link} from "react-router-dom"

import "./GameSessionAudioPlayer.css"


const GameSessionAudioPlayer = (props) => {
    return (
        <div className="container">
                <div id="tracks-container">
                    <h1>{props.artistTrack.artistName}</h1>
                    <h2>{props.artistTrack.name}</h2>
                    <div>
                        <audio id="audioPlayer" src={props.artistTrack.previewURL} controls>
                            <source type="audio/mpeg" />
                        </audio>
                    </div>
                    <Link to="/endsession" onClick={props.saveRoundAndLoadNextSong} ><button>Next song!!!</button></Link>
                </div>
        </div>
    )
}


export default GameSessionAudioPlayer