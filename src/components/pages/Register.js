import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Register.css'
/* import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter'; */

const Register = () => {
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post("http://localhost:4242/register/new_user", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            if (res.status === 201) {
                alert("Registration successful! Please sign in.")
                setRedirect(!redirect)
            } else {
                alert("The username already exists.")
            }
        })
        
    }

    if (redirect) {
        return <Redirect to= "/"/>
    }
    

    return (
    <div className="container_page_register" >
        {/* <NavbarHeader/>
                <NavbarFooter/> */}
        <h1>Register</h1>
        <form  className="form_page_register" onSubmit={handleSubmit}>
            
                <div className="input_register">
                        <label>Username</label>
                        <input type="text" name="username" />
                
                        <label>password</label>
                        <input type="password" name="password" />
                    </div>
                <div className="button-register">
                    <button className="button_register" type="submit">Register</button>
                </div>
                  <div className="button_go_home">  
                  <NavLink to="/" ><button><FontAwesomeIcon icon={faHome} className="goHome_icon_reco_page" /></button></NavLink>                </div>
             </form>
    </div>
    )

}
export default Register;