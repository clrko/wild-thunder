import React from "react"
import {NavLink} from 'react-router-dom';

class TestButton extends React.Component {
    render() {
        return(
            <button><NavLink to={`/${this.props.pageName}/${this.props.pseudo}`}>Hello</NavLink></button>
        )
    }
}

export default TestButton