import React, { Component } from 'react';

import ButtonEndSession from '../ButtonEndSession/ButtonEndSession'
import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import GameSession from './GameSession';
import TimerCounter from '../counter/TimerCounter';
import GameSessionInterface from '../GameSessionInterface'

class SignIn extends Component{
    render(){
        return(
            <div>
                <NavbarHeader/>
                <NavbarFooter/>
                <h1>Hello SignIn Page</h1>
                <TimerCounter/>
                <GameSession />
                <GameSessionInterface/>
                <ButtonEndSession/>
            </div>
        );
    }
}
export default SignIn;