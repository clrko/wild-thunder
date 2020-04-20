import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import SwitchPageButton from '../shared/SwitchPageButton';

class HomePage extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <h1>Hello Home Page</h1>
                <SwitchPageButton pageName="theme-page" pseudo="pseudo" />
            </div>
        );
    }
}
export default HomePage;