import React from "react"
import { NavLink } from 'react-router-dom';

const HomeStartButton = (props) => {
    console.log(props)
    return (
        <button><NavLink to={`/${this.props.pageName}/${this.props.pseudo}`}>Hello</NavLink></button>
    )
}

export default HomeStartButton