import React from 'react';
import "./Welcome.css";



class Welcome extends React.Component {
            state={
            username:'',
            password:'',
        } 
    onChange= (e) =>{
        this.setState({[e.target.name] : e.target.value })
    }
            
            
            
            
    render() {
    return (
    <div>
        <div>
        
        </div>
        <div className="login-page" >
        <h2 className="title-login" >Welcome</h2>
        <label className='label-login' >Username</label>
        <input className="input-login" type='text' name='username'placeholder="Username" onChange={this.onChange}/>
        <input className="button-login" type="submit" value="Play"/>
        </div>
    </div>
       
    
    
    
    );  
}
}
export default Welcome;