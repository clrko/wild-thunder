import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import ThemePage from './components/pages/ThemePage';
import SignIn from './components/pages/SignIn';
import Contact from './components/pages/Contact';
import GameSession from './components/pages/GameSession';


import './App.css';




class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/gamesession/:pseudo/:genre" component={GameSession} />
          <Route path="/theme-page/:pseudo" component={ThemePage} />
          <Route path="/sign_in/:pseudo" component={SignIn} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
