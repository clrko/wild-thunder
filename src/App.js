import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './components/pages/Contact';
import EndSession from './components/pages/EndSession';
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404';
import SignIn from './components/pages/SignIn';
import ThemePage from './components/pages/ThemePage';



import './App.css';
import GameSession from './components/pages/GameSession';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ThemePage} />
          {/* see how to make a link to the modal page */}
          <Route path="/sign_in/:pseudo" component={SignIn} />
          <Route path="/contact/:pseudo" component={Contact} />
          <Route path="/home/:pseudo" component={Home} />
          <Route path="/endsession" component={EndSession} />
          <Route component={Page404} />
        </Switch>
        <GameSession />
      </BrowserRouter>
    );
  }
}

export default App;
