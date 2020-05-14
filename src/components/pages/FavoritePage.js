import React, { useState, useEffect } from "react";
import axios from "axios";

import FavoriteTrack from "./FavoriteTrack";
import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';
import ScrollToTop from '../shared/ScrollToTop';

import API_KEY from '../../secret';

import './FavoritePage.css'

const FavoritePage = (props) => { 
    const [favoriteTrackList, setFavoriteTrackList] = useState([])
    const [isPaused, setIsPaused] = useState([])


    const getFavoriteTrackList = () => {
        if (localStorage.getItem("token")) {
            axios.get("http://localhost:4242/favorite", {
                headers: {
                'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                const allFavorites = res.data.map(favoriteTrack => favoriteTrack.track_id).join(",")
                axios.get(`https://api.napster.com/v2.2/tracks/${allFavorites}`,
                    {
                        params: {
                            apikey: API_KEY
                        }
                    })
                    .then(res => {
                        setFavoriteTrackList(res.data.tracks)
                        setIsPaused(Array(res.data.tracks.length).fill(true))
                    })
            });
        } else {
            alert("You need to connect")
        }
    }

    useEffect(() => getFavoriteTrackList(), [])

    const handleToggleClick = (idtrack) => {
        const isPausedTemp = [...isPaused]
        const currentIndex = favoriteTrackList.findIndex(item => item.id === idtrack)
        isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        setIsPaused(isPausedTemp)

        const targetAudio = document.getElementById(idtrack)
        if (targetAudio.paused) {
            favoriteTrackList.filter(track => track.id !== idtrack).forEach(item => document.getElementById(item.id).pause())
            targetAudio.play()
        } else {
            targetAudio.pause()
            isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        
        }
    }

    const handlePlayEnded = (e) => {
        const isPausedTemp = [...isPaused]
        const index = favoriteTrackList.findIndex(item => item.id === e.target.id)
        isPausedTemp[index] = !isPausedTemp[index]
        setIsPaused(isPausedTemp)
    }

    const handleDeleteFavorite = (idtrack) => {
        const remove = window.confirm("Are you sure you want to remove this track from your favorite list?")
        if (remove) {
            axios.delete(`http://localhost:4242/favorite/tracks/${idtrack}`, 
            {
                headers: { 'x-access-token': localStorage.getItem("token")}
                
            }).then(res => {
                const allFavorites = res.data.map(favoriteTrack => favoriteTrack.track_id).join(",")
                axios.get(`https://api.napster.com/v2.2/tracks/${allFavorites}`,
                    {
                        params: {
                            apikey: API_KEY
                        }
                    })
                    .then(res => {
                        setFavoriteTrackList(res.data.tracks)
                    })
            })
            alert("Successfully taken out from your favorites")
        }
    }

    return (
        
        <div className="favoritepage-wrapper">
            <NavbarHeader />
            <h1 className="favoritepage-title">Hi {props.location.state},</h1> {/* arevoir */}
            <h2 className="favoritepage-title-h2">Welcome to your favorite track page</h2>
            {favoriteTrackList.map((favoriteTrack, i) => <FavoriteTrack key={favoriteTrack.id} albumId={favoriteTrack.albumId} name={favoriteTrack.name} artistName={favoriteTrack.artistName} handleDeleteFavorite={handleDeleteFavorite} handleToggleClick={handleToggleClick} handlePlayEnded={handlePlayEnded} isPaused={isPaused[i]} id={favoriteTrack.id} previewURL={favoriteTrack.previewURL} />)}
            <ScrollToTop />
            <NavbarFooter />
        </div>
    )
}

export default FavoritePage;