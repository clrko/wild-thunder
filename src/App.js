import React from 'react';

import Routes from "./components/Routes";
import LoginPage from './components/login/LoginPage';

function App() {
  return (
    <div>
      <LoginPage/>
      <Routes/>
    </div>
  );
}

export default App;