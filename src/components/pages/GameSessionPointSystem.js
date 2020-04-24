import React from 'react'
import './GameSessionPointSystem.css'
import "./GameSessionNextButton.css"
import "./GameSessionValidateButton.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'

class PointSystem extends React.Component{
            state={
            count : 0 ,
           
                    
        }
       
        

    
    validateAndChange = () => {
         this.setState(this.handleChange )
         this.setState(this.props.nextSong)
          
     }            


    handleChange  = () =>  {
       
                let artistName = this.props.artistTrack.artistName;
                let reponse = artistName.toUpperCase();
                let soluce = reponse.replace(/\s+/g, '')
                
            if(soluce === this.props.solution){
                this.setState({count : this.state.count + 1});}
                   
            }
         
   
            

          
     render(){
        let {count} = this.state;
      
       
        
        return(
            <div className="scoreSystem">
                <p>Your score is {count} points  </p>
                <button onClick={this.validateAndChange} className="validate_button"><FontAwesomeIcon icon={faCheck} className="validate_icon" /> 
        </button>
        <button onClick={this.props.nextSong} className="next_button"><FontAwesomeIcon icon={faStepForward} className="next_icon" /> 
        </button>
            </div>
            
        )}
}
;


export default PointSystem