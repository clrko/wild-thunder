import React, { Component } from 'react';

import claire from "../../images/claire.jpg"
import stephane from "../../images/stephane.jpg"
import sebastien from "../../images/sebastien.jpg"
import maxime from "../../images/maxime.jpg"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
import './ContactCards.css';

const profiles = [
    {
        name: 'Claire',
        picture: claire,
        gitHub: 'https://github.com/clrko'
    },
    {
        name: 'Stephane',
        picture: stephane,
        gitHub: 'https://github.com/pinto78600'
    },
    {
        name: 'Sebastien',
        picture: sebastien,
        gitHub: 'https://github.com/SebG-prog'
    },
    {
        name: 'Maxime',
        picture: maxime,
        gitHub: 'https://github.com/MaximePoitoux' 
    }
]

class ContactCards extends Component {
    render() {
        return (
                <div className="contact-cards-container">
                    {profiles.map(profile => {
                        return (
                            <div className="contact-cards">
                                <img className="img-profile" src={profile.picture} alt="Name" />
                                <div className="container-github-name">
                                    <h1 className="profile-h1">{profile.name}</h1>
                                    <a>{profile.gitHub}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
        )
    }
}

export default ContactCards;

