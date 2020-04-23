import React, {Component} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import "./EndSessionTrackList.css"


class EndSessionTrackList extends Component {

    state = {
        isPaused: true,
        isFavorite:false,
    }

    handleFavoriteClick = () => {
        this.setState({isFavorite:!this.state.isFavorite})
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
            <div >
                <div className="track-container">
                    <img src="https://picsum.photos/id/237/50" alt="placeholder" />
                    <div className="track-info">
                        <p>{this.props.sessionHistory.name}</p> 
                        <p>{this.props.sessionHistory.artistName}</p>
                    </div>
                    <button onClick={this.handleFavoriteClick}><FontAwesomeIcon className={this.state.isFavorite? "favorite-track" : "not-favorite-track"} icon={faHeart}/></button>
                    <button onClick={this.handleToggleClick}><FontAwesomeIcon id="play-pause-btn" icon={this.state.isPaused? faPlay : faPause }/></button>
                </div>
                <audio id={this.props.sessionHistory.id} src={this.props.sessionHistory.previewURL}>
                    <source type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}

export default EndSessionTrackList