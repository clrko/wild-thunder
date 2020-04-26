import React, {Component} from "react"


import NavbarHeader from '../shared/NavbarHeader';
import NavbarFooter from '../shared/NavbarFooter';
import ScrollToTop from '../shared/ScrollToTop';

import "./MainRules.css"

class MainRules extends Component {
    render(){
        return (
            <div>
                <NavbarHeader />
                <NavbarFooter />
                <div className="rules_container">
                    <h1>Main Rules</h1>
                    <div id="rules_thunder">
                        <h2>What is Thunder?</h2>
                        <p>Thunder is a music quiz site simple to use and completely free that help you enrich your musical knowledge.<br/><br/>You don't need to register to start a game. </p>
                    </div>
                    
                    <div id="rules_registration">
                        <h2>Registration</h2>
                        <p> Registration allows you to fully enjoy a taylored game experience by choosing your profile, accessing personalized recommendations, creating private playlists and appearing in the ranking.
                        <br/><br/>
                        </p>
                    </div>

                    <div id="rules_cards">
                        <p>Here is an overview of the mode, the profiles and the ranking.</p>
                    </div>
                    
                    <div id="rules_points">
                        <h2>Points counting</h2>
                        <ul>
                            <li>Find the artist : 1 point</li>
                            <li>Find the title: 0.5 points</li>
                            <li>Speed Bonus: 0.5 points</li>
                        </ul>
                    </div>
                </div>
                <ScrollToTop />
            </div>
        )
    }
}

export default MainRules