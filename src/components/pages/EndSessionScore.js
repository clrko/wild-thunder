import React from 'react'

import './EndSessionScore.css'

const EndSessionScore = (props) => {  //{username, userScore, genresTitle, scoresDB}
    // console.log(score, genresTitle, scoresDB)
    const username = "john"
    const userScore = 100
    const genresTitle = "rock"
    const scoresDB = [
        { id: 4, username: "bob", score: 50, genre: "rock" },
        { id: 8, username: "tom", score: 200, genre: "rock" },
        { id: 16, username: "jerry", score: 120, genre: "rock" },
        { id: 24, username: "sonic", score: 175, genre: "rock" }
    ]

    const scoresTable = scoresDB.sort((a, b) => b.score - a.score)

    const indexScore = scoresTable.findIndex(user => user.score < userScore) === -1 ? scoresDB.length + 1 : scoresTable.findIndex(user => user.score < userScore) + 1

    const oldScore = scoresTable.filter(user => user.username === username && user.genre === genresTitle)

    console.log(indexScore, oldScore)

    return (
        <div className='endSessionScore'>
            <h1>{`Your score in the ${genresTitle} category`}</h1>
            <h2>Rank: {indexScore}, Score: {userScore}pts</h2>
            {oldScore.length !== 0 ?
                (oldScore[0].score < userScore ?
                    <h3>Congratulation you beat your personal record!!!</h3>
                    :
                    <h3>{`You didn't beat your old score of: ${oldScore[0].score}pts`}</h3>)
                :
                <h3>Congratulation that's a new personal record!!!</h3>}
            {/* <>{scoresTable.map((value) => (
                <p>{`${value.username}, ${value.score}`}</p>
            )
            )}</> */}
        </div>
    )
}

export default EndSessionScore