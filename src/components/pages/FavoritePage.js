import React, { useState, useEffect } from "react"
import axios from "axios"

const FavoritePage = () => { 
    const [favoriteTrackList, setFavoriteTrackList] = useState([])

    const getFavoriteTrackList = () => {
        console.log("local storage token est", localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
            axios.get("http://localhost:4242/favorite", {
                headers: {
                'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                console.log("res.data est ", res.data);
                setFavoriteTrackList(res.data)
            });
        } else {
            alert("You need to connect")
        }
    }
    
    useEffect(() => getFavoriteTrackList(), [])

    return (
        
        <div>
            {favoriteTrackList.map(favoriteTrack => <p>{favoriteTrack.track_id}</p>)}
        </div>
    )
}

export default FavoritePage;