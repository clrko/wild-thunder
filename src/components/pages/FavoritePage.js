import React, { useState, useEffect } from "react"
import axios from "axios"

const FavoritePage = () => { 
    const [favoriteTrackList, setFavoriteTrackList] = useState([])

    const getFavoriteTrackList = () =>{
        console.log("local storage token est", localStorage.getItem("token"))
    if (localStorage.getItem("token")) {
        axios.get("http://localhost:4242/favorite", {
            headers: {
            'x-access-token': localStorage.getItem("token"),
            }
        }).then(res => {
            console.log("res.data est ", res.data);
            console.log("res.status est ",res.status);
            console.log("res.statusText est ",res.statusText);
            console.log("res.headers est ",res.headers);
            console.log("res.congi est ",res.config);
            setFavoriteTrackList(res.data)
        });
    } else {
        console.log("you need to connect")
    }
    }
    
    useEffect(getFavoriteTrackList(), [])

    return <div>{favoriteTrackList.map(favoriteTrack => <p>{favoriteTrack.track_id}</p>)}</div>
}

export default FavoritePage;