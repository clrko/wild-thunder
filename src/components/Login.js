import React from 'react';


import Welcome from './welcome/Welcome';

import LoginModal from './loginmodal/LoginModal';

function HomePage() {
  return (
    <div>
      <Welcome/>
      <LoginModal/>
      
      
    </div>
  );
}

export default HomePage;