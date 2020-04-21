import React from "react"
import { NavLink } from 'react-router-dom';

const HomeStartButton = ({pageName, playerData}) => {
    console.log(playerData)
    return (
        <button><NavLink to={{pathname:`/${pageName}`, state:{playerData}}}>START</NavLink></button>
    )
}

export default HomeStartButton
// `/${this.props.pageName}/${this.props.playerName}`