import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './LogOut.css'

const LogOut = () => {
    const [redirect, setRedirect] = useState(false)

    const handleLogOut = () => {
        localStorage.removeItem("token")
        setRedirect(!redirect)
    }

    if (redirect) {
        return <Redirect to="/" />
    }

    return <FontAwesomeIcon onClick={handleLogOut} icon={faSignOutAlt} className="sign-out-icon" />
}

export default LogOut 