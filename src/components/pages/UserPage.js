import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import UserTrackSample from './UserTrackSample';
import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

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
                            favoriteSample: response.data.tracks
                        })
                    })
            })
    }

    handleToggleClick(idtrack) {
        const isPausedTemp = this.state.isPaused
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
        const isPausedTemp = this.state.isPaused
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
            <h1 className="userpage-title">Hi {this.state.username},</h1>
            <h2 className="userpage-title-h2">Welcome to your profile</h2>
            <h3 className="userpage-title-h3">Favorite tracks</h3>
            {this.state.favoriteSample.map((trackSample, i) => <UserTrackSample key={trackSample.id} albumId={trackSample.albumId} name={trackSample.name} artistName={trackSample.artistName} handleToggleClick={this.handleToggleClick} handlePlayEnded={this.handlePlayEnded} isPaused={this.state.isPaused[i]} id={trackSample.id} previewURL={trackSample.previewURL} />)}
            <NavLink to={{pathname: `/favoritepage/${this.state.username}`, username:this.state.username}}><button>See more</button></NavLink>
            <h3 className="userpage-title-h3">Achievements</h3>
            <button>See more</button>
            <NavbarFooter />
        </div>
        )
    }
}

export default UserPage