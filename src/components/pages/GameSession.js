import React from "react"
import GameSessionInterface from "./GameSessionInterface"
import GameSessionAudioPlayer from "./GameSessionAudioPlayer"
import GameSessionTimeCounter from "./GameSessionTimeCounter"
import GameSessionButtonEndSession from "./GameSessionButtonEndSession"

class GameSession extends React.Component {
    render(){
        return(
            <div>
                <GameSessionInterface />
                <GameSessionAudioPlayer />
                <GameSessionTimeCounter />
                <GameSessionButtonEndSession/>
            </div>
        );
    }
    
}

export default GameSession