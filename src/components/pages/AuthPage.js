import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from 'axios'
import Modal from 'react-modal';

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import "./AuthPage.css";

Modal.setAppElement('#root');

const AuthPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target.username.value)
        axios.post("http://localhost:4242/auth/login", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            if (res.status === 201) {
                localStorage.setItem("token", res.headers["x-access-token"])
                alert("You are connected!")
                setRedirect(!redirect)
            } else {
                alert("The password or username is wrong.")
            }
        })
    }

    if (redirect) {
        return <Redirect to={{ pathname: `/mode-page/${username}`, username: username }} />
    }

    return (
        <div className="container-auth" >
            <NavbarHeader />
            <h1>Connection</h1>
            <h2>Create an account and become a legend in THUNDER !</h2>
            <div className="homepageAuth">
                <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
                <NavLink to="/register"><button className='button-signup'>Register</button></NavLink>
            </div>
            <Modal className='loginModalAuth' isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    content: { backgroundColor: 'rgb(88, 71, 71)', borderRadius: '5%' }
                }}>
                <div>
                    <form onSubmit={handleSubmit} className="login-modal" >
                        <h2>Login</h2>
                        <label>Username</label>
                        <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                        <label>Password</label>
                        <input className="input-login-modal" type="password" name="password" placeholder="Password" />
                        <input className="button-login-modal" type="submit" value="Login" />
                        <button className='login-close-modal' onClick={() => setModalIsOpen(false)}>Back</button>
                    </form>
                </div>

            </Modal>
            <NavbarFooter />
        </div>
    )
}

export default AuthPage;    