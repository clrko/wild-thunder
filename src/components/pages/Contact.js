import React, { Component } from 'react';

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import './Contact.css';

class SignIn extends Component {
    render() {
        return (
            <div>
                <NavbarHeader/>
                <NavbarFooter/>
                <h1>Hello Contact us Page</h1>
            </div>
        )
    }
}
export default SignIn;