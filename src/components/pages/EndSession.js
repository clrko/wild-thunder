import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import EndSessionShare from './EndSessionShare'
import EndSessionTrackList from "./EndSessionTrackList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import MainLogo from "../shared/MainLogo";
import "./EndSession.css";
import RankingPage from "./rankingPageTest";
import EndSessionScore from "./EndSessionScore";
import EndSessionRank from "./EndSessionRank";

class EndSession extends Component {
    state = {
        artistTrack: this.props.location.state.map(track => track.artistTrack), /* array of objects */
        isPaused: Array(this.props.location.state.length).fill(true),
        isFavorite: Array(this.props.location.state.length).fill(false),
        isArtistFound: this.props.location.state.map(track => track.isArtistFound),
        genresTitle: this.props.location.genresTitle,
        scoresDB: []
    }

    handleFavoriteClick = (idtrack) => {
        const isFavoriteTemp = [...this.state.isFavorite]
        const index = this.state.artistTrack.findIndex(item => item.id === idtrack)
        isFavoriteTemp[index] = !isFavoriteTemp[index]
        this.setState({ isFavorite: isFavoriteTemp })

        if (localStorage.getItem("token")) {
            axios.post("http://localhost:4242/favorite/tracks", {
                track_id: this.state.artistTrack[index].id
            }, {
                headers: {
                    'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                console.log("res est ", res) /* il faudra crér un emsasge pour dire added to afvortie res.data */
            })
        } else {
            console.log("you need to connect")
        }

    }

    handleToggleClick = (idtrack) => {
        const isPausedTemp = this.state.isPaused.map(status => true)
        const currentIndex = this.state.artistTrack.findIndex(item => item.id === idtrack)
        isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        this.setState({ isPaused: isPausedTemp })

        const targetAudio = document.getElementById(idtrack)
        if (targetAudio.paused) {
            this.state.artistTrack.filter(track => track.id !== idtrack).forEach(item => document.getElementById(item.id).pause())
            targetAudio.play()
        } else {
            targetAudio.pause()
            isPausedTemp[currentIndex] = !isPausedTemp[currentIndex]
        }

    }

    handlePlayEnded = (e) => {
        const isPausedTemp = [...this.state.isPaused]
        const index = this.state.artistTrack.findIndex(item => item.id === e.target.id)
        isPausedTemp[index] = !isPausedTemp[index]
        this.setState({ isPaused: isPausedTemp })
    }

    handleRanking = () => {
        const scoresDB = this.state.scoresDB
        const username = this.props.location.username
        const genresTitle = this.state.genresTitle
        const userScore = this.props.location.score
        const oldScore = scoresDB.filter(user => user.username === username && user.genre === genresTitle)
        console.log(scoresDB, username, genresTitle, userScore, oldScore)
        if (oldScore.length === 0) {
            axios.post("http://localhost:4242/ranking/addScore", {
                username: username,
                score: userScore,
                genre: genresTitle,
            })
                .then(() => {
                    console.log("Posted")
                })
        } else if (userScore > oldScore[0]) {
            const id = oldScore[0].id
            axios.put(`http://localhost:4242/ranking//updateScore/${id}`, {
                score: userScore,
            })
                .then(() => {
                    console.log("Updated")
                })
        } else {
            console.log("User already in DB but score is lower than the one in DB so no update")
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4242/ranking/standard/${this.state.genresTitle}`)
            .then(result => {
                this.setState(console.log(result.data) || { scoresDB: result.data },
                    () => this.handleRanking())
            })
    }

    render() {
        const userScore = this.props.location.score
        const username = this.props.location.username
        return (
            <div className="endsession-container">
                <MainLogo />
                <h1>THUNDER</h1>
                <div className='score_rank' >
                    <EndSessionScore
                        username={username}
                        userScore={userScore}
                        genresTitle={this.state.genresTitle}
                        scoresDB={this.state.scoresDB}
                    />
                    {/* <EndSessionRank  score={userScore} username={username}/> */}
                </div>
                <h1>Final results</h1>
                {this.state.artistTrack.map((track, i) => <EndSessionTrackList key={track.id} albumId={track.albumId} name={track.name} artistName={track.artistName} id={track.id} previewURL={track.previewURL} handleToggleClick={this.handleToggleClick} handleFavoriteClick={this.handleFavoriteClick} handlePlayEnded={this.handlePlayEnded} isPaused={this.state.isPaused[i]} isFavorite={this.state.isFavorite[i]} isArtistFound={this.state.isArtistFound[i]} />)}
                <EndSessionShare />
                <RankingPage />
                <NavLink to="/" className="goHome_button"><button><FontAwesomeIcon icon={faHome} className="goHome_icon" /></button></NavLink>
            </div>
        )
    }
}

export default EndSession;