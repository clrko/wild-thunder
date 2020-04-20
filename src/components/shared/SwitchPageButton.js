import React from "react"
import {NavLink} from 'react-router-dom';

class SwitchPageButton extends React.Component {
    
    // getNavURL = () => {
    //     switch (this.props.pageName) {
    //         case "theme-page":
    //             return `/${this.props.pageName}/${this.props.pseudo}`
    //         case "gamesession":
    //             console.log("gamesession")
    //         default:
    //             console.log("erreur")
    //     }
    // }
    
    
    render() {


        return(
            <button><NavLink to={`/${this.props.pageName}/${this.props.pseudo}`}>Hello</NavLink></button>
        )
    }
}

export default SwitchPageButton