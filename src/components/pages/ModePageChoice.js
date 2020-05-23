import React, { Component } from 'react';

import ModePageCards from "./ModePageCards"

import "./ModePageChoice.css";

const arrayMode = ['Standard', 'Survival']
const gamePathname = [`/theme-page`, `/game-session-survival`]
const modeColor = ["#6a6cd9", "#ff5500"]
const description = ['10 songs', 'No songs limit !']

class ModePageChoice extends Component {
    render() {
        const username = this.props.username
        return (
            <>
                <h1 className="modePage-title">Hi {username}, Pick up your mode</h1>
                <div className="modePage-list">
                    {arrayMode.map((mode, i) => <ModePageCards key={i} title={mode} pathname={gamePathname[i]} modeColor={modeColor[i]} description={description[i]} username={username} />)}
                </div>
            </>
        )
    }
}

export default ModePageChoice;