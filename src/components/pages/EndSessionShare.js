import React from 'react';

import logoFacebook from "../../images/share-facebook.png";

import './EndSessionShare.css';

class EndSessionShare extends React.Component {
    render() {
        return (
            <div className="endSessionShare" >
                <button className="endSessionButtonShare"
                    data-href="https://developers.facebook.com/docs/plugins/"> <a target="_blank" rel='noopener noreferrer'
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
                        <img className='button-share-facebook' src={logoFacebook} alt="facebook" /></a>
                </button>
            </div>
        )
    }
}

export default EndSessionShare;