import React from "react"
import axios from "axios"

const API_KEY = "ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"

const genresCode = "g.5"

class GameSession extends React.Component {

    state = {
        artistsList: [],
        artistTracks: [],
        isLoaded: false,
    }

    getArtistsList = (genresCode) => {
        axios.get(`http://api.napster.com/v2.2/genres/${genresCode}/artists/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=10`)
            .then(res => {
                console.log("Artists List: ", res.data) ||
                    this.setState({ artistList: res.data },
                        () => this.getArtistTracksList(this.state.artistList.artists[0].id))
            })

        console.log("appelAPI: ", this.state.artistsList)
    }

    getArtistTracksList = (artistID) => {
        axios.get(`https://api.napster.com/v2.2/artists/${artistID}/tracks/top?apikey=${API_KEY}`)
            .then(res => {
                console.log("Artist Tracks: ", res.data.tracks) ||
                    this.setState({ artistTracks: res.data.tracks, isLoaded: true })
            })
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

                        <audio id="audioPlayer" src={this.state.artistTracks[0].previewURL} controls>
                            <source type="audio/mpeg" />
                        </audio>
                    </div>}
            </div>
        )
    }
}

export default GameSession