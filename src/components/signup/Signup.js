import React from 'react'
import{PostData} from '../services/PostData';
import{Redirect} from 'react-router-dom'


class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firtname:'',
            lastname:'',
            username:'',
            password:'',

            redirect:false
        }
        this.signup=this.signup.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value });
    }  
    signup(){

    if(this.state.username && this.state.password){
       PostData('signup',this.state).then  ((result) =>{
      let responseJSON = result ;
     if(responseJSON.userData){
        sessionStorage.setItem('userData',responseJSON)
        this.setState({redirect:true})
     }
     else{
        console.log("Signup error") ;
     }
  });  
    }
 
}

    render(){
        if(this.state.redirect){
            return(<Redirect to={'/HomePage'}/>)
        }
        if(sessionStorage.getItem("userData")){
            return(<Redirect to={'/HomePage'}/>)
        }
        return(
            <div>
                <h1>Register</h1>
                
                <label>First Name</label>
                <input type="text" placeholder="First Name" name="firstname" onChange={this.onChange}   />
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" name="lastname" onChange={this.onChange}   />
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" onChange ={this.onChange} />
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" onClick={this.signup} /> 
                
                <input type="submit" value="Login" onClick={this.signup} />
                <a href="/LoginPage">login</a> 
                </div>
       )
    }
}

export default Signup