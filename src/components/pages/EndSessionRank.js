import React from 'react'
import axios from 'axios'

import './EndSessionRank.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faAward, faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import logo from "../../images/thunder_logo_blue.png"
import vynil from "../../images/vinyl.png"

class EndSessionRank extends React.Component {
    state = {
        genre: this.props.match.params.genre,
        username: this.props.match.params.pseudo,
        scoresDB: null
    }

    componentDidMount() {
        axios.get(`http://localhost:4242/ranking/standard/${this.state.genre}`)
            .then(result => {
                this.setState(console.log(result.data) || { scoresDB: result.data })
            })
    }

    render() {
        // console.log("recipe",this.state.scores)
        if (this.state.scoresDB === null) {
            return <p>Loading...</p>
        }

        const scoresTab = this.state.scoresDB.sort((a, b) => b.score - a.score).map((score, index) => {
            return (
                <div className={`score-container ${score.username === this.state.username ? "userScore" : null}`} key={index}>
                        <p id="rank">{index + 1}</p>
                        <img id="logo" src={logo} alt={"logo"} />
                        <div className="username-container">
                            <h3>{score.username}</h3>
                        </div>
                    
                    
                        <div className="score-value">
                            <p id="score">{score.score}</p>
                            <img src={vynil} alt={"vinyl"} />
                        </div>
                        <div className="trophy-award">                     
                            {index < 3 ?
                                <FontAwesomeIcon 
                                id="trophy" 
                                icon={faTrophy}
                                style={index === 0 ? {color:"#FFD700"} : index === 1 ? {color:"#C4CACE"} : {color:"#BF8970"}} />
                                :
                                <FontAwesomeIcon id="award" icon={faAward} />}
                        </div>
                    
                </div>
            )
        })
        return (
            <div className="globalForm">
                <h2>{`Ranking for the ${this.state.genre} category`}</h2>
                {scoresTab}
            </div>
        )
    }
}

export default EndSessionRank