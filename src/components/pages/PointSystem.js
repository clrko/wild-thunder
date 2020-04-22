import React from 'react'
import './PointSystem.css'


class PointSystem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0 ,
            artistTrack : {},
            solution : "",
                    
        }
       
        
        this.handleChange = this.handleChange.bind(this);
    

    }

    handleChange  (props)  {
        if(props.solution === props.artistTrack.artistName){
            this.setState({count : this.state.count + 1});}
           
        }
    componentWillUpdate(props){
        console.log(props.artistTrack.artistName)
            console.log(props.solution);
        
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