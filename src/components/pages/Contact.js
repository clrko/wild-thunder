import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import './Contact.css'

class SignIn extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <NavbarFooter/>
                <h1>Hello Contactus Page</h1>
            </div>
        );
    }
}
export default SignIn;