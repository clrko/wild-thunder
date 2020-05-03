import React, { Component } from 'react';
import ModePageCards from "./ModePageCards"
import "./ModePage.css";

const arrayMode = ['Standard', 'Survival']
const gamePathname = [`/theme-page`, `/game-session-survival`]
const modeColor = ["#6a6cd9","#ef1234"]

class ModePage extends Component {
    render() {
        return (
            <div className="modePage-list">
                {arrayMode.map((mode, i) => <ModePageCards key={i} title={mode} pathname={gamePathname[i]} modeColor={modeColor[i]}/>)}
            </div>
        )
    }
}

export default ModePage;