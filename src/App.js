import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ThemePage from './components/pages/ThemePage';
import SignIn from './components/pages/SignIn';
import Contact from './components/pages/Contact';
import GameSession from './components/pages/GameSession';
import Page404 from './components/pages/Page404';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/gamesession" component={GameSession} />
          <Route path="/theme-page" component={ThemePage} />
          <Route path="/sign_in/:pseudo" component={SignIn} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route exact path="/" component={HomePage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;