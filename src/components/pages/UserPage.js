import React from "react"
import { Component } from "react-r";

class UserPage extends Component  {
    render() {
        return (<div>
            <p>Hello we are on the userPage. we need import</p>
            <ul>
                <li>Username</li>
                <li>Favorite List Card displaying the first 5 tracks and a more button that lead to the favortie List component</li>
                <li>Scores per genre</li>
            </ul>
        </div>)
    }
}

export default UserPage