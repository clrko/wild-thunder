import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from "axios";

import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';

import './Register.css'

toast.configure()
const Register = () => {
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://thunder-backend.herokuapp.com/register/new_user", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            if (res.status === 201) {
                toast.success("Registration successful! Please sign in.")
                setRedirect(!redirect)
            } else {
                toast.error("The username already exists!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <div className="container_page_register" >
            <NavbarHeader />
            <h1>Register</h1>
            <form className="form_page_register" onSubmit={handleSubmit}>

                <div className="input_register">
                    <div >
                        <label>Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                </div>
                <div className="button-register">
                    <button className="button_register" type="submit">Register</button>
                </div>
                <NavbarFooter />
            </form>
        </div>
    )
}

export default Register;