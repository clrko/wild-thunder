import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

import './UserTrackSample.css'

const UserTrackSample = ({ albumId, name, artistName, handleToggleClick, handlePlayEnded, isPaused, id, previewURL }) => {
    return (
        <div >
            <div className="sample-track-container">
                <img className="img-sample-track" src={`https://api.napster.com/imageserver/v2/albums/${albumId}/images/70x70.jpg`} alt="placeholder" />
                <div className="sample-track-info">
                    <p>{name}</p>
                    <p>{artistName}</p>
                </div>
                <button idtrack={id} onClick={() => handleToggleClick(id)}><FontAwesomeIcon className="sample-play-pause-btn" icon={isPaused ? faPlay : faPause} /></button>
            </div>
            <audio id={id} src={previewURL} onEnded={handlePlayEnded}>
                <source type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default UserTrackSample;