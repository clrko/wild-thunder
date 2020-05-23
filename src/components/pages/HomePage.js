import React from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import Welcome from './Welcome';

import './HomePage.css'

const HomePage = () => {
    return (
        <div className="homepage-body">
            <NavbarHeader />
            <Welcome />
        </div>
    )
}

export default HomePage;