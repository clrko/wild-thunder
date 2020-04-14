import React, { Component } from 'react';
import NavbarHeader from './components/shared/NavbarHeader';
import NavbarFooter from './components/shared/NavbarFooter';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


import ThemePage from './components/pages/ThemePage';
import SignIn from './components/pages/SignIn';
import Contact from './components/pages/Contact';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavbarHeader/>
        <NavbarFooter/>
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
