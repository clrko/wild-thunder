import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import UserTrackSample from './UserTrackSample';
import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import ScrollToTop from '../shared/ScrollToTop';

import API_KEY from '../../secret';

import './UserPage.css'

class UserPage extends Component  {
    state = {
        loggedIn : false,
        username: "",
        favoriteSample: [],
        isPaused: []
    }

    getUsername() {
            this.setState({
                loggedIn: true
            })
            
            axios.get("http://localhost:4242/auth", {
                headers: {
                    'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                this.setState({
                    username: res.data[0].username
                })
            })
    }

    getFavoriteSample() {
        axios.get("http://localhost:4242/favorite", {
                headers: {
                'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                const sampleFavorites = res.data.reverse().slice(0, 5).map(favoriteTrack => favoriteTrack.track_id).join(",")
                axios.get(`https://api.napster.com/v2.2/tracks/${sampleFavorites}`,
                    {
                        params: {
                            apikey: API_KEY
                        }
                    })
                    .then(response => {
                        this.setState({
                            favoriteSample: response.data.tracks,
                            isPaused: Array(response.data.tracks.length).fill(true)
                        })
                    })
            })
    }

    handleToggleClick(idtrack) {
        console.log("this state is paused au click c'et", this.state.isPaused)
        const isPausedTemp = [...this.state.isPaused]
        const currentIndex = this.state.favoriteSample.findIndex(item => item.id === idtrack)
        isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        this.setState({
            isPaused: isPausedTemp
        })

        const targetAudio = document.getElementById(idtrack)
        if (targetAudio.paused) {
            this.state.favoriteSample.filter(track => track.id !== idtrack).forEach(item => document.getElementById(item.id).pause())
            targetAudio.play()
        } else {
            targetAudio.pause()
            isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        
        }
    }

    handlePlayEnded(e) {
        const isPausedTemp = [...this.state.isPaused]
        const index = this.state.favoriteSample.findIndex(item => item.id === e.target.id)
        isPausedTemp[index] = !isPausedTemp[index]
        this.setState({
            isPaused: isPausedTemp
        })
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
        this.getUsername()
        this.getFavoriteSample()
        } else {
            this.setState({
                loggedIn: false
            })
        }
    }

    render() {
        return (
        <div className="userpage-wrapper">
            <NavbarHeader />
            <div className="userpage-container">
                <h1 className="userpage-title">Hi {this.state.username},</h1>
                <h2 className="userpage-title-h2">Welcome to your profile</h2>
                <NavLink className="navlink-play-button" to={{pathname: `/mode-page/${this.state.username}`, state:this.state.username, username:this.state.username}}><button className="userpage-play-btn">Play</button></NavLink>
                <div className="userpage-favorite-container">
                    <h3 className="userpage-title-h3">Favorite tracks</h3>
                    {this.state.favoriteSample.map((trackSample, i) => <UserTrackSample key={trackSample.id} albumId={trackSample.albumId} name={trackSample.name} artistName={trackSample.artistName} handleToggleClick={this.handleToggleClick} handlePlayEnded={this.handlePlayEnded} isPaused={this.state.isPaused[i]} id={trackSample.id} previewURL={trackSample.previewURL} />)}
                    <NavLink to={{pathname: `/favoritepage/${this.state.username}`, state:this.state.username}}><button className="userpage-more-btn">See more</button></NavLink>
                </div>
                <div className="userpage-achievement-container">
                    <h3 className="userpage-title-h3">Achievements</h3>
                    <button className="userpage-more-btn" >See more</button>
                </div>
            </div>
            <ScrollToTop />
            <NavbarFooter />
        </div>
        )
    }
}

export default UserPage