import React from 'react'

import { Link } from 'react-router-dom'
import './EndSessionRank.css'

class EndSessionRank extends React.Component {
    render(){
       const score = this.props.score
       const username = this.props.username
       
       return(
            <div className='endSessionRank'>
                <h1> Your ranking :</h1>
                <table className="session-table" >
                    <tr className="session-tr">
                        <th>Rank</th>
                        <th className='rankName'>Name</th>
                        <th>points</th>
                    </tr>
                    <tr className="session-tr" >
                        <td>1</td>
                        <td>{username}</td>
                        <td>{score}pts</td>
                    </tr>
             
                </table>
                <Link to={{pathname:'/ranking-standart', score : this.props.score , username  : this.props.username}}><button className='link-ranking-standart'>Full ranking</button></Link>
            </div>
        )
    }
}
export default EndSessionRank