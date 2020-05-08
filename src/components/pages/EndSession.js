import React, { Component } from "react";
import {NavLink} from "react-router-dom";

import EndSessionShare from './EndSessionShare'
import EndSessionTrackList from  "./EndSessionTrackList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import "./EndSession.css";

class EndSession extends Component {
    state = {
        artistTrack: this.props.location.state.map(track => track.artistTrack), /* array of objects */
        isPaused: Array(this.props.location.state.length).fill(true),
        isFavorite: Array(this.props.location.state.length).fill(false),
        isArtistFound: this.props.location.state.map(track => track.isArtistFound),
    }

    handleFavoriteClick = (idtrack) => {
        const isFavoriteTemp = [...this.state.isFavorite]
        const index = this.state.artistTrack.findIndex(item => item.id === idtrack)
        isFavoriteTemp[index] = !isFavoriteTemp[index]
        this.setState({isFavorite:isFavoriteTemp})
    }

    handleToggleClick = (idtrack) => {
        const isPausedTemp = this.state.isPaused.map(status => true)
        const currentIndex = this.state.artistTrack.findIndex(item => item.id === idtrack)
        isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        this.setState({isPaused:isPausedTemp})

        const targetAudio = document.getElementById(idtrack)
        if (targetAudio.paused) {
            this.state.artistTrack.filter(track => track.id !==idtrack).forEach(item => document.getElementById(item.id).pause())
            targetAudio.play()
        } else {
            targetAudio.pause()
            isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        }
        
    }

    handlePlayEnded = (e) => {
        const isPausedTemp = [...this.state.isPaused]
        const index = this.state.artistTrack.findIndex(item => item.id === e.target.id)
        isPausedTemp[index] = !isPausedTemp[index]
        this.setState({isPaused:isPausedTemp})
    }

    render() {
        return (
            <div className="endsession-container">
                <h1>Final results</h1>
                {this.state.artistTrack.map((track,i) => <EndSessionTrackList key={track.id} albumId={track.albumId} name={track.name} artistName={track.artistName} id={track.id} previewURL={track.previewURL} handleToggleClick={this.handleToggleClick} handleFavoriteClick={this.handleFavoriteClick} handlePlayEnded={this.handlePlayEnded} isPaused={this.state.isPaused[i]} isFavorite={this.state.isFavorite[i]} isArtistFound={this.state.isArtistFound[i]} />)}
                <NavLink to="/" className="goHome_button"><button><FontAwesomeIcon icon={faHome} className="goHome_icon" /></button></NavLink>
                <EndSessionShare/>
            </div>
        )
    }
}

export default EndSession;