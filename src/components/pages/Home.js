import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import LoginWelcomeModal from './LoginWelcomeModal'

class Home extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <h1>Hello Home Page</h1>
                <LoginWelcomeModal/>
            </div>
        );
    }
}
export default Home;