import React from 'react'
import './PointSystem.css'


class PointSystem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0 ,
           
                    
        }
       
        
        this.handleChange = this.handleChange.bind(this);
    

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
                <button type="button"onClick={this.handleChange} >Validate</button>
            </div>
            
        )}
}



export default PointSystem