import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

import logo from "../../images/logo_thunder.svg";

import "./MainLogo.css";

class MainLogo extends Component {
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
            <NavLink to={this.state.loggedIn? {pathname: `/mode-page/${this.state.username}`, username:this.state.username} : {pathname: "/"}}>
                    <img className="mainLogo" src={logo} alt="Logo of the application" />
            </NavLink>
        )
    }
}

export default MainLogo;