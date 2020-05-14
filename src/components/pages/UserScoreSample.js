import React from "react";


import './UserTrackSample.css'

const UserTrackSample = ({ id, score, genre}) => {
    
    return (
        <div className="sample-score-container">
            <p className="sample-genre">{genre}</p>
            <p className="sample-score">{score}</p>
        </div>
    )
}

export default UserTrackSample;