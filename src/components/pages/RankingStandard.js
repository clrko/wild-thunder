import React from 'react';
import {NavLink} from "react-router-dom";

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './RankingStandard.css'

class RankingStandard extends React.Component {
    render(){
       const username = this.props.location.username
       const score = this.props.location.score
        
       return(
            <div className='ranking-standard'>
                <NavbarHeader />
                <h1>Ranking standard :</h1>
                <table className='ranking-standard-table'>
                    <tr className="ranking-standard-tr" >
                        <th className='rank-standard' >Rank</th>
                        <th >Name</th>
                        <th>points</th>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>1</td>
                        <td>{username}</td>
                        <td>{score}pts</td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>2</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>3</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>4</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>5</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>6</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>7</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>8</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>9</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="ranking-standard-tr">
                        <td>10</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <NavbarFooter />
                {/* <NavLink to="/" className="goHome_button_standard"><button><FontAwesomeIcon icon={faHome} className="goHome_icon_standard" /></button></NavLink> */}
            </div>
        )
    }
}
export default RankingStandard