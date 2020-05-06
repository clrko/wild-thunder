import React from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './RankingStandart.css'

class RankingStandart extends React.Component {
    render(){
       const username = this.props.location.username
       const score = this.props.location.score
        
       return(
            <div className='ranking-standart'>
                <h1>Ranking standart :</h1>
                <table className='ranking-standart-table'>
                    <tr className="ranking-standart-tr" >
                        <th className='rank-standart' >Rank</th>
                        <th >Name</th>
                        <th>points</th>
                    </tr>
                    <tr className="ranking-standart-tr">
                        <td>1</td>
                        <td>{username}</td>
                        <td>{score}pts</td>
                    </tr>
                    <tr className="ranking-standart-tr">
                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standart-tr">
                        <td>3</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <NavLink to="/" className="goHome_button_standart"><button><FontAwesomeIcon icon={faHome} className="goHome_icon_standart" /></button></NavLink>
            </div>
        )
    }
}
export default RankingStandart