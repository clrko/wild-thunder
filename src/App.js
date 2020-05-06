import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contact from './components/pages/Contact';
import EndSession from './components/pages/EndSession';
import GameSession from './components/pages/GameSession';
import HomePage from './components/pages/HomePage';
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
          <Route path="/gamesession" component={GameSession} />
          <Route path="/endsession" component={EndSession} />
          <Route path="/ranking-standart" component={RankingStandart}/>
          <Route path="/sign_in/:pseudo" component={SignIn} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;