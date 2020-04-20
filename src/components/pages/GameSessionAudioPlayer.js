import React from "react"
import axios from "axios"

import "./GameSessionAudioPlayer.css"

const API_KEY = "MjY4ZTc5ZTktMDI1MS00YTkwLTliZGEtOGE5ZDA5ODQ0YWNi"

const genresCode = "g.115" // Pop

class GameSessionAudioPlayer extends React.Component {

    state = {
        artistsList: [],
        artistTracks: [],
        isLoaded: false,
        numArtist: 0
    }

    getArtistsList = (genresCode) => {
        axios.get(`http://api.napster.com/v2.2/genres/${genresCode}/artists/top?apikey=${API_KEY}&limit=10`)
            .then(res => {
                console.log("Artists List: ", res.data) ||
                    this.setState({ artistList: res.data },
                        () => this.getArtistTracksList(this.state.artistList.artists[this.state.numArtist].id))
            })
    }

    getArtistTracksList = (artistID) => {
        axios.get(`https://api.napster.com/v2.2/artists/${artistID}/tracks/top?apikey=${API_KEY}`)
            .then(res => {
                console.log("Artist Tracks: ", res.data.tracks) ||
                    this.setState({ artistTracks: res.data.tracks, isLoaded: true },
                        () => {
                            document.getElementById("audioPlayer").play()
                        })
            })
    }

    nextSong = () => {
        this.setState({ numArtist: this.state.numArtist + 1 }, this.getArtistTracksList(this.state.artistList.artists[this.state.numArtist].id))
    }


    componentDidMount() {
        this.getArtistsList(genresCode)
    }

    render() {


        return (
            <div className="container">
                {!this.state.isLoaded ?
                    <div>Loading...</div> :
                    <div id="tracks-container">
                        <h1>{this.state.artistTracks[0].artistName}</h1>
                        <h2>{this.state.artistTracks[0].name}</h2>
                        <div>
                            <audio id="audioPlayer" src={this.state.artistTracks[0].previewURL} controls>
                                <source type="audio/mpeg" />
                            </audio>
                        </div>
                        <button onClick={this.nextSong}>Next song!!!</button>
                    </div>}
            </div>
        )
    }
}

export default GameSessionAudioPlayer