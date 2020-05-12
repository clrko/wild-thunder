import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import axios from "axios";

import LoginModal from "./LoginModal"

/* import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter'; */

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post("http://localhost:4242/register/new_user", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            console.log("resultat", res)
            if (res.status === 200) {
                localStorage.setItem("token", res.headers["x-access-token"])
                alert("Registration successful! Please sign in.")
                return <Redirect to= "/"/>
            } else {
                console.log("not possible, retry")
            }
        })
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