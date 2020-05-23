import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

import './GameSessionPointSystem.css';
import "./GameSessionNextButton.css";
import "./GameSessionValidateButton.css";

const GameSessionPointSystem = ({ hidValidateButton, isArtistFound, score, validateAndChange, saveRoundAndLoadNextSong, counter }) => {
    return (
        <div className="scoreSystem">
            {!hidValidateButton ?
                <>
                    {!isArtistFound ?
                        (counter !== 0 ?
                            <button onClick={validateAndChange} className="validate_button">
                                <FontAwesomeIcon icon={faCheck} className="validate_icon" />
                            </button>
                            :
                            <div>Too Late!</div>
                        )
                        : null}
                    <button onClick={saveRoundAndLoadNextSong} className="next_button"><FontAwesomeIcon icon={faStepForward} className="next_icon" /></button>

                </>
                :
                <div>Next song coming!</div>
            }
            <p className="scoreSystem-p">Your score is {score} points</p>
        </div>
    )
}

export default GameSessionPointSystem; 