import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contact from './components/pages/Contact';
import EndSession from './components/pages/EndSession';
<<<<<<< HEAD
import EndSessionReco from './components/pages/EndSessionReco';
=======
import FavoritePage from './components/pages/FavoritePage';
>>>>>>> dev
import GameSession from './components/pages/GameSession';
import GameSessionSurvival from './components/pages/GameSessionSurvival';
import HomePage from './components/pages/HomePage';
import ModePageMainRules from './components/pages/ModePageMainRules';
import ModePage from './components/pages/ModePage';
import Page404 from './components/pages/Page404';
import RankingStandard from './components/pages/RankingStandard'
import Register from './components/pages/Register';
import ThemePage from './components/pages/ThemePage';
import EndSessionRank from './components/pages/EndSessionRank';


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
          <Route path="/favoritepage/:pseudo" component={FavoritePage} />
          <Route path="/ranking-standard" component={RankingStandard}/>
          <Route path="/register" component={Register} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route path="/mode-page/:pseudo" component={ModePage} />
          <Route path="/game-session-survival" component={GameSessionSurvival} />
          <Route path="/endsessionreco" component={EndSessionReco}/>
          <Route path="/ranking/:genre/:pseudo" component={EndSessionRank} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;