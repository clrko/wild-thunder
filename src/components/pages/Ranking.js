import React from 'react'

import './EndSessionRank.css'

class EndSessionRank extends React.Component {
    render(){
       
       return(
            <div className='endSessionRank'>
                <h1>Ranking :</h1>
                <table >
                    <tr>
                        <th>Rank</th>
                        <th className='rankName'>Name</th>
                        <th>points</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{this.props.username}</td>
                        <td>{this.props.score}pts</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default EndSessionRank