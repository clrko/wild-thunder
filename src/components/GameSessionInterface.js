import React from "react"
import "./GameSessionInterface.css"
class GameSessionInterface extends React.Component {

    state = {
        title: "Let it be",
        solution: ""
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
            </div>
        )
    }
}

export default GameSessionInterface