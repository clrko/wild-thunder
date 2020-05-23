import React from 'react';
import { Redirect } from 'react-router-dom';

import LoginModal from './LoginModal';

import "./Welcome.css";

class Welcome extends React.Component {
    state = {
        username: '',
        password: '',
        error: false
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChange = (e) => {
        const username = this.state.username
        if (username === '') {
            this.setState({ error: true })
        } else {
            this.setState({ redirect: `/mode-page/${username}` })
        }
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: this.state.redirect, username: this.state.username }} />
        }
        return (
            <div>
                <div className="login-page" >
                    <h2 className="title-login" >Welcome to Thunder!</h2>
                    <label className='label-login' >Choose your Username</label>
                    <input className="input-login" type='text' value={this.state.username} name='username' placeholder='.....' onChange={this.onChange} />
                    <p className='error-input'>{this.state.error ? 'Please insert your username' : ""}</p>
                    <button onClick={this.handleChange} className="button-login">Start</button>
                    <LoginModal />
                </div>
            </div>
        )
    }
}

export default Welcome;