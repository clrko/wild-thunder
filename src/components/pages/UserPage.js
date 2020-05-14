import React, { Component } from 'react'
import axios from 'axios'

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import './UserPage.css'

class UserPage extends Component  {
    state = {
        loggedIn : false,
        username: ""
    }

    getUsername() {
        if (localStorage.getItem("token")) {
            this.setState({
                loggedIn: true
            })
            
            axios.get("http://localhost:4242/auth", {
                headers: {
                    'x-access-token': localStorage.getItem("token"),
                }
            }).then(res => {
                this.setState({
                    username: res.data[0].username
                })
            });
        } else {
            this.setState({
                loggedIn: false
            })
        }
    }

    componentDidMount() {
        this.getUsername()
    }

    render() {
        return (
        <div className="userpage-wrapper">
            <NavbarHeader />
            <h1 className="userpage-title">Hi {this.state.username},</h1>
            <h2 className="userpage-title-h2">Welcome to your profile</h2>
            <h3 className="userpage-title-h3">Favorite tracks</h3>
            <h3 className="userpage-title-h3">Achievements</h3>
            <NavbarFooter />
        </div>
        )
    }
}

export default UserPage