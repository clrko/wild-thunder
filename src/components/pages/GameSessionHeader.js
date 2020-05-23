import React from "react"

import './GameSessionHeader.css'

class GameSessionHeader extends React.Component {

    render() {
        const genreTitle = this.props.genresTitle
        const color = this.props.color

        return (
            <div className={`${color} gameSessionHeader`}>
                <div className="headerGenre">{genreTitle}</div>
            </div>
        )
    }
}

export default GameSessionHeader