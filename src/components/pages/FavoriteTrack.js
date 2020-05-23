import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './FavoriteTrack.css'

const FavoriteTrack = ({ albumId, name, artistName, handleDeleteFavorite, handleToggleClick, handlePlayEnded, isPaused, id, previewURL }) => {

    return (
        <div >
            <div className="favorite-track-container">
                <img className="img-favorite-track" src={`https://api.napster.com/imageserver/v2/albums/${albumId}/images/70x70.jpg`} alt="placeholder" />
                <div className="favorite-track-info">
                    <p>{name}</p>
                    <p>{artistName}</p>
                </div>
                <button idtrack={id} onClick={() => handleToggleClick(id)}><FontAwesomeIcon className="favorite-play-pause-btn" icon={isPaused ? faPlay : faPause} /></button>
                <button idtrack={id} onClick={() => handleDeleteFavorite(id)}><FontAwesomeIcon className="favorite-favorite-track" icon={faTimes} /></button>
            </div>
            <audio id={id} src={previewURL} onEnded={handlePlayEnded}>
                <source type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default FavoriteTrack;