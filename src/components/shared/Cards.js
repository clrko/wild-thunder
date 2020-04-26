import React from 'react';
import "./Cards.css"
import { NavLink } from 'react-router-dom';


function Cards(props) {
    return (
        <NavLink to={
            {pathname: props.pathname, state:props.genreId}
            }>
        <div className="card" style={{background: props.divStyle}}>
            <div className="card_image">
                <div className="card_title title-white">
                    <div>{props.genreTitle}</div>
                </div>
            </div>
        </div>
        </NavLink>
    );
}

export default Cards

