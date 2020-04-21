import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import HomeStartButton from '../shared/HomeStartButton';

const playerName = {pseudo: "bob"}

class HomePage extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <h1>Hello Home Page</h1>
                <HomeStartButton pageName="theme-page" playerData={playerName} />
            </div>
        );
    }
}
export default HomePage;