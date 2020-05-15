import React from 'react'
import axios from 'axios'

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faAward } from '@fortawesome/free-solid-svg-icons'
import vynil from "../../images/vinyl.png"

import './EndSessionRank.css'

const tabRGB = [[196, 126, 253], [126, 236, 253], [249, 253, 126], [253, 132, 126], [253, 183, 126], [126, 129, 253], [210, 126, 253], [109, 211, 132]]

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
        if (this.state.scoresDB === null) {
            return <p>Loading...</p>
        }

        const scoresTab = this.state.scoresDB.sort((a, b) => b.score - a.score).map((score, index) => {
            return (
                <div className={`score-container ${score.username === this.state.username ? "userScore" : null}`} key={index}
                    style={{ backgroundColor: `rgba(${tabRGB[index % tabRGB.length]},0.9)` }}
                >
                    <div className="rank-avatar-container">
                        <p id="rank">{index + 1}</p>
                        <div id="avatar">
                            <img src={`https://eu.ui-avatars.com/api/?name=${score.username}&rounded=true&size=55&bold=true&color=ff000&format=svg`} alt={"logo"} />
                        </div>
                    </div>
                    <div className="username-container">
                        <h3>{score.username}</h3>
                    </div>

                    <div className="score-trophy-container">
                        <div className="score-value">
                            <p id="score">{score.score}</p>
                            <img src={vynil} alt={"vinyl"} />
                        </div>
                        <div className="trophy-award">
                            {index < 3 ?
                                <FontAwesomeIcon
                                    id="trophy"
                                    icon={faTrophy}
                                    style={index === 0 ? { color: "#FFD700" } : index === 1 ? { color: "#C4CACE" } : { color: "#BF8970" }} />
                                :
                                <FontAwesomeIcon id="award" icon={faAward} />}
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="globalForm">
                <NavbarHeader />
                <h1>{`Ranking for the ${this.state.genre} category`}</h1>
                <div className="scoresTab" >{scoresTab}</div>
                <NavbarFooter />
            </div>
        )
    }
}

export default EndSessionRank