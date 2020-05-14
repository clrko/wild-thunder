import React, { Component } from "react"

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import './UserPage.css'

class UserPage extends Component  {
    render() {
        return (
        <div className="userpage-wrapper">
            <NavbarHeader />
            <p>Hello we are on the userPage. we need import</p>
            <ul>
                <li>Username</li>
                <li>Favorite List Card displaying the first 5 tracks and a more button that lead to the favortie List component</li>
                <li>Scores per genre</li>
            </ul>
            <NavbarFooter />
        </div>
        )
    }
}

export default UserPage