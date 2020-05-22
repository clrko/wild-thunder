import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

import CountDownTimer from './CountDownTimer';
import GameSessionAudioPlayer from "./GameSessionAudioPlayer";
import GameSessionButtonEndSession from "./GameSessionButtonEndSession";
import GameSessionHeader from "./GameSessionHeader";
import GameSessionInterface from "./GameSessionInterface";
import GameSessionPointSystem from "./GameSessionPointSystem";
import Loader from '../Loader/Loader';

import API_KEY from '../../secret'

import vinyl from '../../images/vinyl.png'

import './GameSessionSurvival.css'

const rounds = 100
const startTime = 30

class GameSessionSurvival extends React.Component {
    state = {
        artistTrackList: [],
        artistTrack: {}, /* Contains the song currently playing */
        isLoaded: false,
        numArtist: 0,
        solution: "",
        score: 0,
        isArtistFound: false,
        sessionHistory: [],
        genresTitle: "Survival",
        color: this.props.location.background,
        redirect: null,
        counter: 30,
        numberOfAttempts: 3,
        revealedSolution: false,
        hidValidateButton: false,
        textToClickNext: false,
    }

    componentDidMount() {
        this.getArtistTrackList()
    }

    /* First call to the api to get a random list of artists. The number of artists selected will be defined by the rounds value */
    getArtistTrackList = () => {
        axios.get(`https://api.napster.com/v2.2/tracks/top`,
            {
                params: {
                    apikey: API_KEY,
                    limit: rounds
                }
            })
            .then(res => {
                this.setState({
                    artistTrackList: this.getListShuffled(res.data.tracks),
                    artistTrack: res.data.tracks[0],
                    isLoaded: true,
                },
                    () =>
                        document.getElementById("audioPlayer").play())
            })
    }

    /* Randomized an array. this function is called both on the get ArtistsList and get ArtistTracksList */
    getListShuffled = (list) => {
        let newIndex, temp;
        for (let i = list.length - 1; i > 0; i--) {
            newIndex = Math.floor(Math.random() * (i + 1));
            temp = list[i];
            list[i] = list[newIndex];
            list[newIndex] = temp;
        } return list
    }

    validateAndChange = () => {
        const artistToFind = this.state.artistTrack.artistName.toUpperCase().replace(/\s+/g, '')
        if (artistToFind === this.state.solution) {
            this.setState((prevState) => ({ score: prevState.score + prevState.counter, isArtistFound: true, revealedSolution: true, textToClickNext: true }));
        }
    }

    displaySolution = () => {
        this.setState(() => ({ revealedSolution: true }))
        if (this.state.counter === 0) {
            this.setState(() => ({ textToClickNext: true }))
        }
    }

    saveRoundAndLoadNextSong = () => {
        this.setState(prevState =>
            !prevState.isArtistFound ? { numberOfAttempts: prevState.numberOfAttempts - 1 } : null
        )
        if (this.state.counter !== 0 && !this.state.revealedSolution) {
            this.displaySolution()
            this.setState({ hidValidateButton: true })
            setTimeout(() => {
                this.addToHistory()
                if (this.state.numberOfAttempts === 0 || this.state.numArtist === rounds - 1) {
                    this.setState({ redirect: "/endsession" })
                } else if (this.state.numArtist < rounds - 1) {
                    this.nextSong()
                }
            }, 3000)
        } else {
            this.addToHistory()
            if (this.state.numberOfAttempts === 0 || this.state.numArtist === rounds - 1) {
                this.setState({ redirect: "/endsession" })
            } else if (this.state.numArtist < rounds - 1) {
                this.nextSong()
            }
        }
    }

    addToHistory = () => {
        this.setState((prevState) => ({ sessionHistory: [...prevState.sessionHistory, { numArtist: prevState.numArtist, artistTrack: prevState.artistTrack, isArtistFound: prevState.isArtistFound }] }))
    }

    nextSong = () => {
        this.setState(
            (prevState) => ({ numArtist: prevState.numArtist + 1 }),
            () => this.setState({ artistTrack: this.state.artistTrackList[this.state.numArtist] },
                () => {
                    this.setState({ solution: "", isArtistFound: false, hidValidateButton: false })
                    this.restartCounter()
                    document.getElementById("userInput").value = ""
                    document.getElementById("audioPlayer").play()
                }));
    }

    /*CountDownTimer methods*/
    updateCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    restartCounter = () => {
        document.querySelector(".circle").style.animation = "none"
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                document.querySelector(".circle").style.animation = `countdown-animation ${startTime}s linear, color-animation ${startTime}s linear`;
            })
        })
        this.setState({ counter: startTime }, () => this.setState({ revealedSolution: false }))
        this.setState({ counter: startTime }, () => this.setState({ textToClickNext: false }))
    }

    /*  Functions used in the userinterface that aims at inputing a letter, erease and update the number of boxes based on the artist being played */
    handleClick = event => {
        const letter = event.target.value
        if (this.state.solution.length < this.state.artistTrack.artistName.replace(/\s+/g, '').length) {
            this.setState({ solution: this.state.solution + letter })
        }
    }

    handleChange = event => {
        const input = event.target.value.replace(/\s+/g, '').toUpperCase()
        this.setState({ solution: input })
    }

    handleCorrection = () => {
        this.setState({ solution: this.state.solution.slice(0, -1) })
    }

    componentDidUpdate(props, prevState) {
        if (prevState.solution !== this.state.solution) {
            const solutionBoxes = document.getElementsByClassName("letter")
            for (let i = 0; i < this.state.artistTrack.artistName.replace(/\s+/g, '').length; i++) {
                solutionBoxes[i].textContent = this.state.solution[i]
            }
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: this.state.sessionHistory,
                score: this.state.score,
                username: this.props.location.username,
                genresTitle: this.state.genresTitle
            }} />
        }

        let numberOfAttempts = Array.apply(null, Array(this.state.numberOfAttempts))
        return (
            <div className="gameSessionSurvival-body">
                {!this.state.isLoaded ?
                    <div><Loader /></div>
                    :
                    <div>
                        <GameSessionButtonEndSession username={this.props.location.username} />
                        <GameSessionHeader genresTitle={this.state.genresTitle} color={this.state.color} />
                        <div className="attempts-container">
                            {this.state.numberOfAttempts !== 0 ?
                                <>
                                    <h2>Number of attempts left:</h2>
                                    <div>
                                        {numberOfAttempts.map(() =>
                                            (<img src={vinyl} alt={this.state.numberOfAttempts} id="NumberOfAttempts" />))
                                        }
                                    </div>
                                </>
                                :
                                <h2>You lost!!!</h2>
                            }
                        </div>
                        <CountDownTimer displaySolution={this.displaySolution} counter={this.state.counter} startTime={startTime} updateCounter={this.updateCounter} />
                        <GameSessionAudioPlayer revealedSolution={this.state.revealedSolution} saveRoundAndLoadNextSong={this.saveRoundAndLoadNextSong} artistTrack={this.state.artistTrack} sessionHistory={this.state.sessionHistory} />
                        <GameSessionInterface textToClickNext={this.state.textToClickNext} artistTrack={this.state.artistTrack} handleClick={this.handleClick} handleChange={this.handleChange} handleCorrection={this.handleCorrection} />
                        <GameSessionPointSystem hidValidateButton={this.state.hidValidateButton} isArtistFound={this.state.isArtistFound} validateAndChange={this.validateAndChange} score={this.state.score} saveRoundAndLoadNextSong={this.saveRoundAndLoadNextSong} counter={this.state.counter} />
                    </div>
                }
            </div>
        )
    }
}

export default GameSessionSurvival;





