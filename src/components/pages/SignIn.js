import React, { Component } from 'react';

import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import GameSession from './GameSession'
import TimerCounter from '../../component/TimerCounter'
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
            </div>
        );
    }
}
export default SignIn;