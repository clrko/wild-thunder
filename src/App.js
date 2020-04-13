import React, { Component } from 'react';
import Navbar from './components/shared/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import ThemePage from './components/pages/ThemePage';
import SignIn from './components/pages/SignIn';
import Contact from './components/pages/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ThemePage}/>
          {/* see how to make a link to the modal page */}
          <Route path="/sign_in" component={SignIn}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
