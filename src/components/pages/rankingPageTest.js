import React from 'react'
import axios from 'axios'

class RankingPage extends React.Component {
    state = {
        scores:null,
        success: false,
    }

    handleSubmit = event => {
        // event.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:4242/ranking/addScore", {
            username: "bob",
            score: "125",
            genre: "pop",
        })
        .then(() => {
            this.setState({ success:true })
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4242/ranking/standard')
        .then(result => {
            this.setState({ scores: result.data })
        })
    }
    render () {
        // console.log("recipe",this.state.scores)
        if (this.state.scores === null) {
            return <p>Loading...</p>
        }
        const tabRecipes = this.state.scores.sort((a,b) => b.score - a.score).map((score, index) => {
            return (
                <div className="recipeContainer" key={index}>
                    <div className="recipeValues">{score.username}</div>
                    <div className="recipeValues">{score.score}</div>
                    <div className="recipeValues">{score.genre}</div>
                </div>
            )
        }) 
        return (
        <div className="globalForm">
            {tabRecipes}
            <button type="submit" onClick={this.handleSubmit}>Publish</button>
            {this.state.success? <p>OK!</p> : null}
        </div>
        )
    }
}

export default RankingPage