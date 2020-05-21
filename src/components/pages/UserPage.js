import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';
import ScrollToTop from '../shared/ScrollToTop';
import UserTrackSample from './UserTrackSample';
import UserScoreSample from "./UserScoreSample";

import API_KEY from '../../secret';

import './UserPage.css'

const UserPage = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [favoriteSample, setFavoriteSample] = useState([])
    const [scoresSample, setScoresSample] = useState([])
    const [isPaused, setIsPaused] = useState([])

    const getUsername = () => {
        setLoggedIn(true)
        axios.get("https://thunder-backend.herokuapp.com/auth", {
            headers: {
                'x-access-token': localStorage.getItem("token"),
            }
        }).then(res => {
            setUsername(res.data[0].username)
        })
    }

    useEffect(() => (localStorage.getItem("token")) ? getUsername() : setLoggedIn(false), [])

    const getFavoriteSample = () => {
        axios.get("https://thunder-backend.herokuapp.com/favorite", {
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
                        setFavoriteSample(response.data.tracks)
                        setIsPaused(Array(response.data.tracks.length).fill(true))
                    })
                })
    }

    useEffect(() => (localStorage.getItem("token")) ? getFavoriteSample() : setLoggedIn(false), [])

    const handleToggleClick = (idtrack) => {
        const isPausedTemp = isPaused.slice()
        const currentIndex = favoriteSample.findIndex(item => item.id === idtrack)
        
        const targetAudio = document.getElementById(idtrack)
        if (targetAudio.paused) {
            favoriteSample.filter(track => track.id !== idtrack).forEach(item => document.getElementById(item.id).pause())
            targetAudio.play()
        } else {
            targetAudio.pause()
        }
        isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        setIsPaused(isPausedTemp)
    }

    const handlePlayEnded = (e) => {
        const isPausedTemp = [...isPaused]
        const index = favoriteSample.findIndex(item => item.id === e.target.id)
        isPausedTemp[index] = !isPausedTemp[index]
        setIsPaused(isPausedTemp)
    }

    const getScoreSample = () => {
        axios.get("https://thunder-backend.herokuapp.com/ranking/allscores", {
            headers: {
                'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                setScoresSample(res.data.slice(0, 5))
            })
    }

    useEffect(() => (localStorage.getItem("token")) ? getScoreSample() : setLoggedIn(false), [])

    return (
    <div className="userpage-wrapper">
        <NavbarHeader />
        <div className="userpage-container">
            <h1 className="userpage-title">Hi {username},</h1>
            <h2 className="userpage-title-h2">Welcome to your profile</h2>
            <NavLink className="navlink-play-button" to={{pathname: `/mode-page/${username}`, state:username, username:username}}><button className="userpage-play-btn">Play</button></NavLink>
            <div className="userpage-favorite-container">
                <h3 className="userpage-title-h3">Favorite tracks</h3>
                {favoriteSample.map((trackSample, i) => <UserTrackSample key={trackSample.id} albumId={trackSample.albumId} name={trackSample.name} artistName={trackSample.artistName} handleToggleClick={handleToggleClick} handlePlayEnded={handlePlayEnded} isPaused={isPaused[i]} id={trackSample.id} previewURL={trackSample.previewURL} />)}
                <NavLink to={{pathname: `/favoritepage/${username}`, state:username}}><button className="userpage-more-btn">See more</button></NavLink>
            </div>
            <div className="userpage-achievement-container">
                <h3 className="userpage-title-h3">Achievements</h3>
                {scoresSample.map((scoreSample, i) => <UserScoreSample key={scoreSample.id} id ={scoreSample.id} genre={scoreSample.genre} score={scoreSample.score} />)}
                <NavLink to={{pathname: `/scorepage/${username}`, state:username}}><button className="userpage-more-btn">See more</button></NavLink>
            </div>
        </div>
        <ScrollToTop />
        <NavbarFooter />
    </div>
    )
}

export default UserPage