import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';

import axios from 'axios'
import Modal from 'react-modal';

import NavbarFooter from '../shared/NavbarFooter';
import NavbarHeader from '../shared/NavbarHeader';

import "./AuthPage.css";

Modal.setAppElement('#root');

toast.configure()
const AuthPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target.username.value)
        axios.post("https://thunder-backend.herokuapp.com/auth/login", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            if (res.status === 201) {
                localStorage.setItem("token", res.headers["x-access-token"])
                toast.success("You are successfully connected!", {
                    position: toast.POSITION.TOP_CENTER
                })
                setRedirect(!redirect)
            } else {
                toast.warn("The password or username is wrong.", {
                    position: toast.POSITION.TOP_CENTER
                })
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
            <div className="homepageModal">
                <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
                <NavLink to="/register"><button className='button-signup'>Register</button></NavLink>
            </div>
            <Modal className='loginModal' isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    content: { borderRadius: '5%' }
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