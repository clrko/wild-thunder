import React from "react"


class GameSessionHeader extends React.Component{
    state={
        history : this.props
        
    }
    


     render(){
        console.log(this.props.history)
            
    return(
       
        <div>
            <p>{this.props.history.history.action}</p>
        </div>
    )
    
}}


export default GameSessionHeader