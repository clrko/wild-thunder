import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from "axios";

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
    <div>
        {/* <NavbarHeader/>
                <NavbarFooter/> */}
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit">Register</button>
            <NavLink to="/"><button type="submit">Cancel</button></NavLink>
        </form>
    </div>
    )

}
export default Register;