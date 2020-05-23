import React, { Component } from 'react';

import claire from "../../images/claire.jpg"
import maxime from "../../images/maxime.jpg"
import stephane from "../../images/stephane.jpg"
import sebastien from "../../images/sebastien.jpg"

import './ContactCards.css';

const profiles = [
    {
        name: 'Claire',
        picture: claire,
        gitHub: 'https://github.com/clrko',
        pseudo: 'clrko'
    },
    {
        name: 'Stephane',
        picture: stephane,
        gitHub: 'https://github.com/pinto78600',
        pseudo: 'pinto78600'
    },
    {
        name: 'Sebastien',
        picture: sebastien,
        gitHub: 'https://github.com/SebG-prog',
        pseudo: 'SebG-prog'
    },
    {
        name: 'Maxime',
        picture: maxime,
        gitHub: 'https://github.com/MaximePoitoux',
        pseudo: 'MaximePoitoux'
    }
]

class ContactCards extends Component {
    render() {
        return (
            <div className="contact-cards-container">
                {profiles.map((profile, index) => {
                    return (
                        <div className="contact-cards" key={index}>
                            <div className="img-container">
                                <img className="img-profile" src={profile.picture} alt="Name" />
                            </div>
                            <div className="container-github-name">
                                <h1 className="profile-h1">{profile.name}</h1>
                                <p>GitHub: <a className="contact-cards-link" rel='noopener noreferrer' href={profile.gitHub} target="_blank">{profile.pseudo}</a></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ContactCards;

