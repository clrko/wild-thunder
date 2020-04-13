import React from "react"
import "./GameSessionInterface.css"



const singleLetter = s => s.toUpperCase().replace(/\s+/g, '').split("").sort().reduce((a, b) => (a[a.length - 1] !== b) ? (a + b) : a, "")

class GameSessionInterface extends React.Component {

    state = {
        title: "Let it be",
        solution: ""
    }

    handleClick = event => {
        const letter = event.target.value
        this.setState({solution: this.state.solution + letter}, this.updateBoxes)
    }

    handleCorrection = () => {
        this.setState({ solution: this.state.solution.slice(0,-1)}, this.updateBoxes)
    }

    updateBoxes = () => {
        const solutionBoxes = document.getElementsByClassName("letter")
        for (let i = 0; i < this.state.title.replace(/\s+/g, '').length; i++) {
            solutionBoxes[i].textContent = this.state.solution[i]
        }
    }

    render() {
        return (
            <div>
                <div className="solutionDisplayBoxes">
                    {
                        this.state.title.split(" ")
                            .map((word) => (
                                <div className="word">
                                    {word.split("").map(() =>
                                        <div className="letter"></div>
                                    )}
                                </div>
                            ))
                    }
                </div>
                <div>
                    <div>
                    {
                        singleLetter(this.state.title).split("").map(letter =>
                            <input type="button" className="buttonLetter" value={letter} onClick={this.handleClick} />
                        )
                    }
                    </div>
                    <input type="button" className="correctionButton" value="<" onClick={this.handleCorrection} />
                </div>
            </div>
        )
    }
}

export default GameSessionInterface