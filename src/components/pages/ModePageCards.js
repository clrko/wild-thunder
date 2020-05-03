import React from 'react';
import { NavLink } from 'react-router-dom'
import "./ModePageCards.css"

const ModePageCards = ({title, pathname, modeColor}) => {
    return (
        <NavLink to={{pathname}}> 
            <div className="ModePageCards-card" style={{backgroundColor: modeColor}}>
                <div className="ModePageCards-title">
                    <p>{title}</p>
                </div>
            </div>
        </NavLink>
    );
}

export default ModePageCards;

