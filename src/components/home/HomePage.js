import React from 'react'
import { Redirect } from 'react-router-dom'

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    this.logout= this.logout.bind(this)
    }
    
    componentWilMount(){
        if(sessionStorage.getItem("userData")){
            
        }
        else{
            this.setState({redirect : true})
        }
    }
    logout(){
        sessionStorage.getItem("userData",'');;
        sessionStorage.clear();
        this.setState({redirect : true})

    }
    
    
    
    render(){
        
      if(this.state.redirect){
          return(<Redirect to={'/login'}/>)
      }  
        
        return(
            <div>
            <h1>Hello</h1>
            <button type="button" onClick={this.logout}>Logout</button>
        </div>
        )
    }
}


export default HomePage