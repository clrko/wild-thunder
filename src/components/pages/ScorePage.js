import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from "axios";

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';
import Score from "./Score";
import ScrollToTop from '../shared/ScrollToTop';

import 'react-toastify/dist/ReactToastify.css';
import './ScorePage.css'

toast.configure()
const ScorePage = (props) => {
    const [scoreList, setScoreList] = useState([])

    const notifyGetScoreList = () => {
        toast.warn("You need to sign in!", {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            autoClose: 5000
        })
    }

    const getScoreList = () => {
        if (localStorage.getItem("token")) {
            axios.get("https://thunder-backend.herokuapp.com/ranking/allscores", {
                headers: {
                    'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                setScoreList(res.data)
            });
        } else {
            notifyGetScoreList()
        }
    }

    useEffect(() => getScoreList(), [])

    return (

        <div className="scorepage-wrapper">
            <NavbarHeader />
            <h1 className="scorepage-title">Hi {props.location.state},</h1>
            <h2 className="scorepage-title-h2">Welcome to your score page</h2>
            {scoreList.map((score, i) => <Score key={score.id} id={score.id} genre={score.genre} score={score.score} />)}
            <ScrollToTop />
            <NavbarFooter />
        </div>
    )
}

export default ScorePage;