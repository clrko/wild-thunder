import React, { useState, useEffect } from "react"
import axios from "axios"

import FavoriteTrack from "./FavoriteTrack"

import API_KEY from '../../secret'

const FavoritePage = () => { 
    const [favoriteTrackList, setFavoriteTrackList] = useState([])
    const [isPaused, setIsPaused] = useState([])
    const [isFavorite, setIsFavorite] = useState([])


    const getFavoriteTrackList = () => {
        console.log("local storage token est", localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
            axios.get("http://localhost:4242/favorite", {
                headers: {
                'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                console.log("res.data est ", res.data);
                console.log("res.dat.map.join ", res.data.map(favoriteTrack => favoriteTrack.track_id).join(","));
                
                const allFavorites = res.data.map(favoriteTrack => favoriteTrack.track_id).join(",")
                axios.get(`https://api.napster.com/v2.2/tracks/${allFavorites}`,
                    {
                        params: {
                            apikey: API_KEY
                        }
                    })
                    .then(res => {
                        console.log("mon res est ",  res.data.tracks)
                        setFavoriteTrackList(res.data.tracks)
                        setIsPaused(Array(res.data.length).fill(true))
                        setIsFavorite(Array(res.data.length).fill(true))
                    })
            });
        } else {
            alert("You need to connect")
        }
    }

    useEffect(() => getFavoriteTrackList(), [])

    const handleToggleClick = (idtrack) => {
        const isPausedTemp = isPaused.map(status => true)
        const currentIndex = favoriteTrackList.findIndex(item => item.id === idtrack)
        isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        setIsPaused(isPausedTemp)

        const targetAudio = document.getElementById(idtrack)
        if (targetAudio.paused) {
            favoriteTrackList.filter(track => track.id !==idtrack).forEach(item => document.getElementById(item.id).pause())
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

    /* gestion du delete */
    const handleFavoriteClick = (idtrack) => {
        const isFavoriteTemp = [...isFavorite]
        const index = favoriteTrackList.findIndex(item => item.id === idtrack)
        isFavoriteTemp[index] = !isFavoriteTemp[index]
        setIsFavorite(isFavoriteTemp)

        axios.put("http://localhost:4242/favorite/tracks", {
             track_id: idtrack }, {
            headers: { 'x-access-token': localStorage.getItem("token")}
            
        }).then(res => {
            console.log("res est ", res)
            alert("Successfully taken out from your favorites")
        })
    }

    return (
        
        <div>
            {console.log("the favorite track list is ", {favoriteTrackList})}
            {favoriteTrackList.map(favoriteTrack => <p>{favoriteTrack.artistName}</p>)}
            {favoriteTrackList.map(favoriteTrack => <FavoriteTrack key={favoriteTrack.id} albumId={favoriteTrack.albumId} name={favoriteTrack.name} artistName={favoriteTrack.artistName} handleFavoriteClick={handleFavoriteClick} handleToggleClick={handleToggleClick} handlePlayEnded={handlePlayEnded} isFavorite={isFavorite} isPaused={isPaused} id={favoriteTrack.id} previewURL={favoriteTrack.previewURL} />)}
        </div>
    )
}

export default FavoritePage;