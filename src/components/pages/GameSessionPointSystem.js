import React from 'react'
import './GameSessionPointSystem.css'
import "./GameSessionNextButton.css"
import "./GameSessionValidateButton.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

const GameSessionPointSystem = (props) => {
        return (
            <div className="scoreSystem">
                <p>Your score is {props.score} points  </p>
                <button onClick={props.validateAndChange} className="validate_button"><FontAwesomeIcon icon={faCheck} className="validate_icon" />
                </button>
                <button onClick={props.saveRoundAndLoadNextSong} className="next_button"><FontAwesomeIcon icon={faStepForward} className="next_icon" />
                </button>
            </div>

        )
    }
export default GameSessionPointSystem