import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "./EndSessionTrackList.css";

const EndSessionTrackList = ({isArtistFound, albumId, name, artistName, handleFavoriteClick, handleToggleClick, handlePlayEnded, isFavorite, isPaused, id, previewURL}) => {
    
    return (
        <div >
            <div className="track-container" style={isArtistFound ? {border: "2px solid #4dff4d"} : {border: "2px solid #ff4d4d"}} >
                <img className="img-tracklist" src={`https://api.napster.com/imageserver/v2/albums/${albumId}/images/70x70.jpg`} alt="placeholder" />
                <div className="track-info">
                    <p>{name}</p> 
                    <p>{artistName}</p>
                </div>
                <button idtrack={id} onClick={() => handleFavoriteClick(id)}><FontAwesomeIcon className={isFavorite? "favorite-track" : "not-favorite-track"} icon={faHeart}/></button>
                <button idtrack={id} onClick={() => handleToggleClick(id)}><FontAwesomeIcon className="play-pause-btn" icon={isPaused? faPlay : faPause }/></button>
            </div>
            <audio id={id} src={previewURL} onEnded={handlePlayEnded}>
                <source type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default EndSessionTrackList;