import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from "axios";

/* import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter'; */

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault() 
        axios.post("http://localhost:4242/register", {
            username: e.target.username.value,
            password: e.target.password.value
        }).then(res => {
            console.log("resultat", res)
            if (res.status === 200) {
                localStorage.setItem("token", res.headers["x-access-token"])
                return <Redirect to={{ pathname: "/modepage-mainrules", username : e.target.username.value }} />
            } else {
                console.log("not possible, retry")
            }
        })
    }

    return (
    <div>
        {/* <NavbarHeader/>
                <NavbarFooter/> */}
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button type="submit">Register</button>
        </form>
    </div>
    )

}
export default Register;