import React from "react"
import './GameSessionHeader.css'


class GameSessionHeader extends React.Component{
    
 render(){
    const genreTitle = this.props.genresTitle
    const color = this.props.color 
            
    return(
       
        <div className="gameSessionHeader" style={{backgroundColor:color}}>
            <p className="headerGenre" >{genreTitle}</p>
        </div>
    )
    
}}


export default GameSessionHeader