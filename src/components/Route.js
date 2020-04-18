import React from "react"
import {BrowserRouter, Route ,Switch } from "react-router-dom"

import LoginPage from "./login/LoginPage"
import Signup from "./signup/Signup"
import HomePage from "./home/HomePage"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/home" component={HomePage}/>
         </Switch>
    </BrowserRouter>   
)

export default Routes