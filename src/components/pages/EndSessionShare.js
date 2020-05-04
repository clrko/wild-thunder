import React from 'react'  ;
import './EndSessionShare.css' ;
import logoFacebook from "../../images/facebook.png";


class EndSessionShare extends React.Component {
    





    render(){
    

    return (
        
            <div className="endSessionShare" >
                <button className="endSessionButtonShare"  
                    data-href="https://developers.facebook.com/docs/plugins/"> <a target="_blank" 
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
                    <img src={logoFacebook}/></a>
                    
                </button>
            </div>
            
          

          
    )

}
}

export default EndSessionShare