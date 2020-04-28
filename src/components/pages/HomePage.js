import React from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import LoginModal from './LoginModal';
import Welcome from './Welcome';

const HomePage = () => {
    return (
        <div>
            <NavbarHeader/>
            <Welcome/>
            <LoginModal/>
        </div>
    )
}

export default HomePage;