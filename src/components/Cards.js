import React from 'react';
import "./Cards.css"
import { NavLink } from 'react-router-dom';


function Cards(props) {
    return (
        <NavLink to={'/gamesession/pseudo/genre'}>
        <div className="card" style={{background: props.divStyle}}>
            <div className="card_image">
                <div className="card_title title-white">
                    <div>{props.title}</div>
                </div>
            </div>
        </div>
        </NavLink>
    );
}

export default Cards

