import React from 'react'

import './EndSessionScore.css'

class EndSessionScore extends React.Component {
    render(){
       const score = this.props.score 
       return(
            <div className='endSessionScore'>
                <h1>Your score final</h1>
                    <h1>{score}pts</h1>
            </div>
        )
    }
}
export default EndSessionScore