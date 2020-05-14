import React, { Component } from 'react';

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';
import ContactCards from './ContactCards'

import './Contact.css';

class SignIn extends Component {
    render() {
        return (
            <div>
                <NavbarHeader />
                <NavbarFooter />
                <ContactCards />
            </div>
        )
    }
}
export default SignIn;