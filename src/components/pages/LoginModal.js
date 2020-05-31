import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';

import axios from 'axios'
import Modal from 'react-modal';

import 'react-toastify/dist/ReactToastify.css';
import "./LoginModal.css";

Modal.setAppElement('#root');

toast.configure()
const LoginModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [username, setUsername] = useState("")

    const notifyConnexionError = () => {
        toast.error("The password or username is wrong.", {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            autoClose: 5000
        })
    }

    const notifyConnexionSuccess = () => {
        toast.success("You are successfully connected!", {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            autoClose: 5000
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target.username.value)
        axios.post("https://thunder-backend.herokuapp.com/auth/login", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            if (res.status === 201) {
                localStorage.setItem("token", res.headers["x-access-token"])
                notifyConnexionSuccess()
                setRedirect(!redirect)
            } else {
                notifyConnexionError()
            }
        })
    }

    if (redirect) {
        return <Redirect to={{ pathname: `/mode-page/${username}`, username: username }} />
    }

    return (
        <div className="homepageModal" >
            <button className='login-open-modal' onClick={() => setModalIsOpen(true)}>Login</button>
            <NavLink to="/register"><button className='button-signup'>Register</button></NavLink>
            <Modal className='loginModal' isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}>
                <div>
                    <form onSubmit={handleSubmit} className="login-modal" >
                        <h2>Login</h2>
                        <label>Username</label>
                        <input className="input-login-modal" type="text" name="username" placeholder="Username" />
                        <label>Password</label>
                        <input className="input-login-modal" type="password" name="password" placeholder="Password" />
                        <div className="button-login-close-container">
                            <input className="button-login-modal" type="submit" value="Login" />
                            <button className='login-close-modal' onClick={() => setModalIsOpen(false)}>Back</button>
                        </div>
                    </form>
                </div>

            </Modal>
        </div>
    )
}


export default LoginModal;