import React from 'react';
import { Link } from 'react-router-dom';

import "./Welcome.css";

class Welcome extends React.Component {
    state = {
        username: '',
        password: '',
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <div className="login-page" >
                    <h2 className="title-login" >Welcome to Thunder!</h2>
                    <label className='label-login' >Choose a pseudo</label>
                    <input className="input-login" type='text' value={this.state.username} name='username' placeholder="Username" onChange={this.onChange} />
                    <Link to={{pathname:`/mode-page`, username:this.state.username}}><button className="button-login">Start</button></Link>
                </div>
            </div>
        );
    }
}
export default Welcome;