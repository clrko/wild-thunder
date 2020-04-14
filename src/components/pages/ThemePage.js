import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';

class ThemePage extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <NavbarFooter/>
                <h1>Hello Theme display Page</h1>
            </div>
        );
    }
}
export default ThemePage;