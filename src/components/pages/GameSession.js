import React from "react"
import axios from "axios"

const API_KEY = "ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"

const genresCode = "g.5"

class GameSession extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>{"artistName"}</h1>
                <h2>{"name"}</h2>
                <div id="tracks-container">
                    <audio id="audioPlayer" src={""} controls>
                        <source type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        )
    }
}

export default GameSession