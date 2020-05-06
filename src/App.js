import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contact from './components/pages/Contact';
import EndSession from './components/pages/EndSession';
import GameSession from './components/pages/GameSession';
import GameSessionSurvival from './components/pages/GameSessionSurvival';
import HomePage from './components/pages/HomePage';
import ModePageMainRules from './components/pages/ModePageMainRules';
import ModePage from './components/pages/ModePage';
import Page404 from './components/pages/Page404';
import RankingStandart from './components/pages/RankingStandart'
import SignIn from './components/pages/SignIn';
import ThemePage from './components/pages/ThemePage';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/theme-page" component={ThemePage} />
          <Route path="/modepage-mainrules" component={ModePageMainRules} />
          <Route path="/gamesession" component={GameSession} />
          <Route path="/endsession" component={EndSession} />
          <Route path="/ranking-standart" component={RankingStandart}/>
          <Route path="/sign_in/:pseudo" component={SignIn} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route path="/mode-page" component={ModePage} />
          <Route path="/game-session-survival" component={GameSessionSurvival} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;