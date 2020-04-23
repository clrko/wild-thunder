import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import LoginModal from './LoginModal';
import Welcome from './Welcome';

class HomePage extends Component{
    
    state= {
        pseudo:"bob"
    }

    render(){
        return(
            <div>
                <NavbarHeader/>
                <Welcome/>
                <LoginModal/>
            </div>
        );
    }
}
export default HomePage;