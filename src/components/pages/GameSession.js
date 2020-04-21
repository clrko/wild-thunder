import React from "react"
import axios from "axios"

import GameSessionAudioPlayer from "./GameSessionAudioPlayer"
import GameSessionButtonEndSession from "./GameSessionButtonEndSession"
import GameSessionInterface from "./GameSessionInterface"
import GameSessionNextButton from "./GameSessionNextButton"
import GameSessionTimeCounter from "./GameSessionTimeCounter"
import GameSessionValidateButton from "./GameSessionValidateButton"


const API_KEY = "MjY4ZTc5ZTktMDI1MS00YTkwLTliZGEtOGE5ZDA5ODQ0YWNi"

class GameSession extends React.Component {
    state = {
        genresCode: this.props.location.state,
        artistsList: [],
        artistTrack: {},
        isLoaded: false,
        numArtist: 0,
        solution:"",
    }

    getArtistsList = (genresCode) => {
        axios.get(`http://api.napster.com/v2.2/genres/${genresCode}/artists/top?apikey=${API_KEY}&limit=10`)
            .then(res => {
                console.log("Artists List: ", res.data) ||
                    this.setState({ artistList: res.data.artists }, /* Changes Claire : saved directly the arti meta, note the whole table */
                        () => this.getArtistTracksList(this.state.artistList[this.state.numArtist].id))
            })
    }

    /* Changes Claire : get only the first track */
    getArtistTracksList = (artistID) => {
        axios.get(`https://api.napster.com/v2.2/artists/${artistID}/tracks/top?apikey=${API_KEY}`)
            .then(res => {
                console.log("Artist Tracks: ", res.data.tracks[0]) ||
                    this.setState({ artistTrack: res.data.tracks[0], isLoaded: true },
                        () => {
                            document.getElementById("audioPlayer").play()
                        })
            })
    }

    nextSong = () => {
        this.setState({ numArtist: this.state.numArtist + 1 }, this.getArtistTracksList(this.state.artistList[this.state.numArtist].id))
    }


    componentDidMount() {
        this.getArtistsList(this.state.genresCode)
    }


    handleClick = event => {
        const letter = event.target.value
        if (this.state.solution.length < this.state.artistTracks[0].name.replace(/\s+/g, '').length) {
            this.setState({ solution: this.state.solution + letter }, this.updateBoxes)
        }
    }

    handleChange = event => {
        const input = event.target.value.replace(/\s+/g, '').toUpperCase()
        this.setState({ solution: input }, this.updateBoxes)
    }

    handleCorrection = () => {
        this.setState({ solution: this.state.solution.slice(0, -1) }, this.updateBoxes)
    }

    updateBoxes = () => {
        const solutionBoxes = document.getElementsByClassName("letter")
        for (let i = 0; i < this.state.title.replace(/\s+/g, '').length; i++) {
            solutionBoxes[i].textContent = this.state.solution[i]
        }
    }

    render(){
        return(
            <div>
                <GameSessionTimeCounter />
                <GameSessionAudioPlayer isLoaded={this.state.isLoaded} nextSong={this.nextSong} artistTrack={this.state.artistTrack}/>
                <GameSessionInterface isLoaded={this.state.isLoaded} artistTrack={this.state.artistTrack} handleClick={this.handleClick} handleChange={this.handleChange} handleCorrection={this.handleCorrection} />
                <GameSessionButtonEndSession/>
                <GameSessionValidateButton />
                <GameSessionNextButton />
            </div>
        );
    }
    
}

export default GameSession