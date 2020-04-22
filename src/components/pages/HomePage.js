import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import HomeStartButton from '../shared/HomeStartButton';
import LoginWelcomeModal from './LoginWelcomeModal';


class HomePage extends Component{
    
    state= {
        pseudo:"bob"
    }

    render(){
        return(
            <div>
                <NavbarHeader/>
                <h1>Hello Home Page</h1>
                <HomeStartButton playerData={this.state} />
                <LoginWelcomeModal/>
            </div>
        );
    }
}
export default HomePage;