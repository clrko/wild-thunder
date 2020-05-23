import React from 'react'
import { Link } from 'react-router-dom'

import EndSessionShare from './EndSessionShare';

import './EndSessionScore.css'

const EndSessionScore = ({ username, userScore, genresTitle, scoresDB }) => {
    const scoresTable = scoresDB.sort((a, b) => b.score - a.score)
    const indexScore = scoresTable.findIndex(user => user.score < userScore) === -1 ? scoresDB.length + 1 : scoresTable.findIndex(user => user.score < userScore) + 1
    const oldScore = scoresTable.filter(user => user.username === username && user.genre === genresTitle)

    return (
        <div className='endSessionScore'>
            <h2>{`Your score in the ${genresTitle} category`}</h2>
            <div className="endsession-results" >
                <p>Rank: {indexScore}</p>
                <p>Score: {userScore}pts</p>
            </div>

            {oldScore.length !== 0 ?
                (oldScore[0].score < userScore ?
                    <h3>Congratulation you beat your personal record!!!</h3>
                    :
                    <h3>{`You didn't beat your old score of: ${oldScore[0].score}pts`}</h3>)
                :
                <h3>Congratulation that's a new personal record!!!</h3>}
            <div className="endsession-actions">
                <Link to={{ pathname: `/ranking/${genresTitle.replace(/\s+/g, '%20').replace(/\//g, '%2F')}/${username}` }}><button className="full-ranking-btn">Full ranking</button></Link>
                <EndSessionShare />
            </div>
        </div>
    )
}

export default EndSessionScore