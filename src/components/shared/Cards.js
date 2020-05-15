import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Cards.css";

function Cards(props) {
    return (
        <NavLink to={
            { pathname: `/gamesession`, 
            state: props.genreId, 
            title: props.genreTitle, 
            background: props.className, 
            username: props.username }
        }>
            <div className={`card ${props.className}`}>
                <div className="card_image">
                    <div className="card_title title-white">
                        <div>{props.genreTitle}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default Cards;

