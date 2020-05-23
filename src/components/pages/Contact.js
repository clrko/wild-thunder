import React, { Component } from 'react';

import ContactCards from './ContactCards'
import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <NavbarHeader />
                <NavbarFooter />
                <ContactCards />
            </div>
        )
    }
}

export default Contact;