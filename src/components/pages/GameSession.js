import React from "react"

import GameSessionAudioPlayer from "./GameSessionAudioPlayer"
import GameSessionInterface from "./GameSessionInterface"
import GameSessionNextButton from "./GameSessionNextButton"
import GameSessionTimeCounter from "./GameSessionTimeCounter"
import GameSessionValidateButton from "./GameSessionValidateButton"


class GameSession extends React.Component {
    render(){
        return(
            <div>
                <GameSessionInterface />
                <GameSessionAudioPlayer />
                <GameSessionTimeCounter />
                <GameSessionValidateButton />
                <GameSessionNextButton />
            </div>
        );
    }
    
}

export default GameSession