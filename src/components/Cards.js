import React from 'react';
import "./Cards.css"


function Cards(props) {
    return (
        <div className="card" style={props.divStyle}>
            <div class="card_image">
                <div className="card_title title-white">
                    <div>{props.title}</div>
                </div>
            </div>
        </div>
    );
}


export default Cards

