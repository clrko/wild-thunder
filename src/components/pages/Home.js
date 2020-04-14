import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';

class Home extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <h1>Hello Home Page</h1>
            </div>
        );
    }
}
export default Home;