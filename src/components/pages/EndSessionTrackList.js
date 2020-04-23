import React, {Component} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
/* import { faVolumeUp } from '@fortawesome/free-solid-svg-icons' */


class EndSessionTrackList extends Component {

    state = {
        isPaused: true
    }

    

    handleToggleClick = () => {

        const myAudio = document.getElementById(this.props.sessionHistory.id)
        
        if (myAudio.paused) {
            this.setState({isPaused: !this.state.isPaused}) 
            myAudio.play();
        } else { 
            myAudio.pause();
            this.setState({isPaused: !this.state.isPaused}) 
        } 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggleClick}><FontAwesomeIcon icon={this.state.isPaused? faPlay : faPause }/></button>
                <p>{this.props.sessionHistory.name}</p>
                <p>{this.props.sessionHistory.artistName}</p>
                <input id="volume" type="range" min="0" max="10" value="4"></input>
                <audio id={this.props.sessionHistory.id} src={this.props.sessionHistory.previewURL} controls>
                    <source type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}

export default EndSessionTrackList