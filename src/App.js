import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthPage from './components/pages/AuthPage';
import Contact from './components/pages/Contact';
import EndSession from './components/pages/EndSession';
import EndSessionRank from './components/pages/EndSessionRank';
import EndSessionReco from './components/pages/EndSessionReco';
import FavoritePage from './components/pages/FavoritePage';
import GameSession from './components/pages/GameSession';
import GameSessionSurvival from './components/pages/GameSessionSurvival';
import HomePage from './components/pages/HomePage';
import ModePage from './components/pages/ModePage';
import ModePageMainRules from './components/pages/ModePageMainRules';
import Page404 from './components/pages/Page404';
import Register from './components/pages/Register';
import ThemePage from './components/pages/ThemePage';
import UserPage from './components/pages/UserPage';
import ScorePage from './components/pages/ScorePage';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/authentication" component={AuthPage} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route path="/endsession" component={EndSession} />
          <Route path="/ranking/:genre/:pseudo" component={EndSessionRank} />
          <Route path="/endsessionreco" component={EndSessionReco}/>
          <Route path="/favoritepage/:pseudo" component={FavoritePage} />
          <Route path="/gamesession" component={GameSession} />
          <Route path="/game-session-survival" component={GameSessionSurvival} />
          <Route exact path="/" component={HomePage} />
          <Route path="/mode-page/:pseudo" component={ModePage} />
          <Route path="/modepage-mainrules" component={ModePageMainRules} />
          <Route path="/register" component={Register} />
          <Route path="/theme-page" component={ThemePage} />
          <Route path="/userpage" component={UserPage} />
          <Route path="/scorepage/:pseudo" component={ScorePage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;