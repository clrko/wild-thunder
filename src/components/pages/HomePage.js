import React from 'react';
import './HomePage.css'

import NavbarHeader from '../shared/NavbarHeader';
import Welcome from './Welcome';

const HomePage = () => {
    return (
        <div className="homepage-body">
            <NavbarHeader/>
            <Welcome/>
        </div>
    )
}

export default HomePage;