import React from "react"
import "./GameSessionNextButton.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'


class GameSessionNextButton extends React.Component {
    render () {
      return (
        <button className="next_button"><FontAwesomeIcon icon={faStepForward} className="next_icon" /> 
        </button>
      );
    }
  }
  

export default GameSessionNextButton
