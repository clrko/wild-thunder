import React, { Component } from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './components/pages/Home';
import ThemePage from './components/pages/ThemePage';
import SignIn from './components/pages/SignIn';
import Contact from './components/pages/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ThemePage}/>
          {/* see how to make a link to the modal page */}
          <Route path="/sign_in" component={SignIn}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
