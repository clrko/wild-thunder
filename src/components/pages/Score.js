import React from "react";

import './Score.css'

const Score = ({ id, genre, score }) => {

    return (
        <div className="user-score-container">
            <p className="score-genre">{genre}</p>
            <p className="score-score">{score}</p>
        </div>
    )
}

export default Score;