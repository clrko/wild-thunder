import React from "react"
import axios from "axios"

import GameSessionAudioPlayer from "./GameSessionAudioPlayer"
import GameSessionButtonEndSession from "./GameSessionButtonEndSession"
import GameSessionInterface from "./GameSessionInterface"
import GameSessionNextButton from "./GameSessionNextButton"
import GameSessionTimeCounter from "./GameSessionTimeCounter"
import GameSessionValidateButton from "./GameSessionValidateButton"
import PointSystem from "./PointSystem"


const API_KEY = "MjY4ZTc5ZTktMDI1MS00YTkwLTliZGEtOGE5ZDA5ODQ0YWNi"

const genresCode = "g.115" // Pop

class GameSession extends React.Component {
    state = {
        artistsList: [], /*donne une liste définie d'artise au hasard*/
        artistTrack: {}, /* contient un son choisi au hasard */
        isLoaded: false,
        numArtist: 0,
        solution:"",
    }
    
    
    
    getArtistsList = (genresCode) => {
        axios.get(`http://api.napster.com/v2.2/genres/${genresCode}/artists/top`, 
                {params: {
                    apikey: API_KEY, 
                    limit: 50}})
            .then(res => {
                console.log("Artists List: ", res.data) ||
                    this.setState({ artistList: this.getListShuffled(res.data.artists) },
                        () => this.getArtistTracksList(this.state.artistList[this.state.numArtist].id))
            })
    }

    /* Changes Claire : get only one random track */
    getArtistTracksList = (artistID) => {
        axios.get(`https://api.napster.com/v2.2/artists/${artistID}/tracks/top`, {params: {apikey: API_KEY}})
            .then(res => {
                console.log("Artist Tracks: ", res.data.tracks[0]) ||
                    this.setState({ artistTrack: this.getListShuffled(res.data.tracks)[0], isLoaded: true },
                        () => {
                            document.getElementById("audioPlayer").play()
                        })
            })
    }

    getListShuffled = (list) => {
        let newIndex, temp;
        for (let i = list.length - 1; i > 0; i--) {
            newIndex = Math.floor(Math.random() * (i+1));
            temp = list[i];
            list[i] = list[newIndex];
            list[newIndex] = temp;
        } return list
    }

    nextSong = () => {
        this.setState({ numArtist: this.state.numArtist + 1 }, this.getArtistTracksList(this.state.artistList[this.state.numArtist].id))
    }


    componentDidMount() {
        this.getArtistsList(genresCode)
    }


    handleClick = event => {
        const letter = event.target.value
        if (this.state.solution.length < this.state.artistTrack.artistName.replace(/\s+/g, '').length) {
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
        for (let i = 0; i < this.state.artistTrack.artistName.replace(/\s+/g, '').length; i++) {
            solutionBoxes[i].textContent = this.state.solution[i]
        }
    }

    render(){
      
    return(
            <div>
                {!this.state.isLoaded ? 
                <div>Loading...</div>
                :
                <div>
                    <GameSessionTimeCounter />
                    <GameSessionAudioPlayer nextSong={this.nextSong} artistTrack={this.state.artistTrack}/>
                    <GameSessionInterface artistTrack={this.state.artistTrack} handleClick={this.handleClick} handleChange={this.handleChange} handleCorrection={this.handleCorrection} />
                    <GameSessionButtonEndSession/>
                    <GameSessionValidateButton />
                    <GameSessionNextButton />
                    <PointSystem artistTrack={this.state.artistTrack} solution={this.state.solution}  />
                </div>
            };
            </div> 
        );
    }
    
}

export default GameSession