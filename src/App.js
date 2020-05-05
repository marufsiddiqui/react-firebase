import React from 'react';
import { Nav } from './Nav';
import { Channel } from './Channel';
import { useAuth } from './useAuth';
import Login from './Login';
import { Router, Redirect } from '@reach/router';

function App() {
  const user = useAuth();

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Router>
        <Channel user={user} path="channel/:channelId" />
        <Redirect noThrow from="/" to="channel/general" />
      </Router>
    </div>
  ) : (
    <Login />
  );
}

export default App;
