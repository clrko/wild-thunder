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

        /* albumId: this.props.location.state.map(track => track.artistTrack.albumId),
        name: this.props.location.state.map(track => track.artistTrack.name),
        artistName: this.props.location.state.map(track => track.artistTrack.artistName),
        previewURL: this.props.location.state.map(track => track.artistTrack.previewURL),
        id: this.props.location.state.map(track => track.artistTrack.id), */
        
    }

    handleFavoriteClick = (idTrack) => {
        const isFavoriteTemp = [...this.state.isFavorite]
        console.log("isFavoriteTemp", isFavoriteTemp)
        const index = this.state.artistTrack.findIndex(item => item.id === idTrack)
        console.log("idTrack", idTrack)
        console.log("index", index)
        isFavoriteTemp[index] = !isFavoriteTemp[index]
        this.setState({isFavorite:isFavoriteTemp}, () => console.log("isFavrotie after", this.state.isFavorite))
    }

    handleToggleClick = (idTrack) => {
        /* const myAudio = document.getElementById(this.stateartistTrack.id)
        
        if (myAudio.paused) {
            this.setState({isPaused: !this.state.isPaused}) 
            myAudio.play();
        } else { 
            myAudio.pause();
            this.setState({isPaused: !this.state.isPaused}) 
        }  */

        const isPausedTemp = [...this.state.isPaused]
        console.log("isPausedTemp", isPausedTemp)
        const index = this.state.artistTrack.findIndex(item => item.id === idTrack)
        console.log("idTrack", idTrack)
        console.log("index", index)
        isPausedTemp[index] = !isPausedTemp[index]
        this.setState({isPaused:isPausedTemp}, () => console.log("isPaused after", this.state.isPaused))
    }

    /* 
    handleToggleClick = () => {

        const myAudio = document.getElementById(this.props.sessionHistory.artistTrack.id)
        
        if (myAudio.paused) {
            this.setState({isPaused: !this.state.isPaused}) 
            myAudio.play();
        } else { 
            myAudio.pause();
            this.setState({isPaused: !this.state.isPaused}) 
        } 
    } */

    render() {
        /* console.log("artistTrack est", this.state.artistTrack)
        console.log("isArtisFound est", this.state.isArtistFound)
        console.log("is pauseest", this.state.isPaused)
        console.log("is favorite est", this.state.isFavorite) */
        return (
            <div className="endsession-container">
                <h1>The tracklist of your game session :</h1>
                {this.state.artistTrack.map((track,i) => <EndSessionTrackList key={track.id} albumId={track.albumId} name={track.name} artistName={track.artistName} id={track.id} previewURL={track.previewURL} handleToggleClick={this.handleToggleClick} handleFavoriteClick={this.handleFavoriteClick} isPaused={this.state.isPaused[i]} isFavorite={this.state.isFavorite[i]} isArtistFound={this.state.isArtistFound[i]} />)}
                <NavLink to="/" className="goHome_button"><button><FontAwesomeIcon icon={faHome} className="goHome_icon" /></button></NavLink>
                <EndSessionShare/>
            </div>
        )
    }
}

export default EndSession;