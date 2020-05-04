import React, { Component } from "react";
import axios from 'axios';

const API_KEY = "MjY4ZTc5ZTktMDI1MS00YTkwLTliZGEtOGE5ZDA5ODQ0YWNi"

const rounds = 200

class GameSessionSurvival extends Component {
  state = {
    survivalTopTracks: []
  }

  componentDidMount() {
    axios.get(`http://api.napster.com/v2.2/tracks/top`,
        {
          params: {
            apikey: API_KEY,
            limit: rounds
          }
        })
        .then(res => {
          this.setState({survivalTopTracks : res.data.tracks}, () => console.log(this.state.survivalTopTracks))
        })
}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}


export default GameSessionSurvival;



