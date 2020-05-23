import React from 'react';
import { NavLink } from 'react-router-dom'

import "./ModePageCards.css"

const ModePageCards = ({title, pathname, modeColor, description,username}) => {
    
    return (
        <NavLink to={{pathname , username}}> 
            <div className="ModePageCards-card" style={{backgroundColor: modeColor}}>
                <div className="ModePageCards-title">
                    <p>{title}</p>
                    <p className="ModePageCards-description">{description}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default ModePageCards;

