import React from 'react'  ;
import './EndSessionShare.css' ;
import logoFacebook from "../../images/facebook.png";

class EndSessionShare extends React.Component {
    render(){
    return (
        <h1>
           <button className="endSessionButtonShare" >
                <div ><img src={logoFacebook}/></div>
                <div className="buttonShare" >Share</div>
           </button>
        </h1>
    )
}}


export default EndSessionShare