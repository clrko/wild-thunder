import React, { useState, useEffect } from "react";
import axios from "axios";

import Score from "./Score";
import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';
import ScrollToTop from '../shared/ScrollToTop';

import './ScorePage.css'

const ScorePage = (props) => { 
    const [scoreList, setScoreList] = useState([])

    const getScoreList = () => {
        if (localStorage.getItem("token")) {
            axios.get("http://localhost:4242/ranking/allscores", {
                headers: {
                'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                console.log("res est ", res)
            });
        } else {
            alert("You need to connect")
        }
    }

    useEffect(() => getScoreList(), [])

    return (
        
        <div className="scorepage-wrapper">
            <NavbarHeader />
            <h1 className="scorepage-title">Hi {props.location.state},</h1> 
            <h2 className="scorepage-title-h2">Welcome to your score page</h2>
            {scoreList.map((score, i) => <Score key={id} id={id} genre={favoriteTrack.name} score={favoriteTrack.artistName} />)}
            <ScrollToTop />
            <NavbarFooter />
        </div>
    )
}

export default ScorePage;