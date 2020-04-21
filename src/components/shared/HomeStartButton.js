import React from "react"
import { NavLink } from 'react-router-dom';

const HomeStartButton = ({playerData}) => {
    return (
        <button><NavLink to={{pathname:`/theme-page`, state:playerData}}>START</NavLink></button>
    )
}

export default HomeStartButton