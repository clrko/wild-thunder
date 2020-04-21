import React from "react"
import "./GameSessionValidateButton.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


class GameSessionValidateButton extends React.Component {
    render () {
      return (
        <button className="validate_button"><FontAwesomeIcon icon={faCheck} className="validate_icon" /> 
        </button>
      );
    }
  }
  

export default GameSessionValidateButton
