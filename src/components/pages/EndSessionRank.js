import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faAward, faHome } from '@fortawesome/free-solid-svg-icons'
import vynil from "../../images/vinyl.png"

import './EndSessionRank.css'

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

    genRandomRGBColor = (s, v) => {
        const hsv_to_rgb = (h, s, v) => {
            let r = 0
            let g = 0
            let b = 0
            const h_i = Math.floor(h * 6)
            const f = h * 6 - h_i
            const p = v * (1 - s)
            const q = v * (1 - f * s)
            const t = v * (1 - (1 - f) * s)
            if (h_i === 0) { r = v; g = t; b = p }
            else if (h_i === 1) { r = q; g = v; b = p }
            else if (h_i === 2) { r = p; g = v; b = t }
            else if (h_i === 3) { r = p; g = q; b = v }
            else if (h_i === 4) { r = t; g = p; b = v }
            else if (h_i === 5) { r = v; g = p; b = q }
            return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)]
        }
        const golden_ratio_conjugate = 0.618033988749895
        let h = Math.random()
        h += golden_ratio_conjugate
        h %= 1
        return hsv_to_rgb(h, s, v)
    }

    render() {
        if (this.state.scoresDB === null) {
            return <p>Loading...</p>
        }

        const scoresTab = this.state.scoresDB.sort((a, b) => b.score - a.score).map((score, index) => {
            const tabRGB = this.genRandomRGBColor(0.5, 0.99)
            console.log(tabRGB)
            return (
                <div className={`score-container ${score.username === this.state.username ? "userScore" : null}`} key={index}
                    style={{ backgroundColor: `rgba(${tabRGB},0.9)` }}
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