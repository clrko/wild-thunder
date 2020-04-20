import React from "react"
import GameSessionInterface from "./GameSessionInterface"
import GameSessionAudioPlayer from "./GameSessionAudioPlayer"
import GameSessionTimeCounter from "./GameSessionTimeCounter"


class GameSession extends React.Component {
    render(){
        return(
            <div>
                <GameSessionInterface />
                <GameSessionAudioPlayer />
                <GameSessionTimeCounter />
            </div>
        );
    }
    
}

export default GameSession