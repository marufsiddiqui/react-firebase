import React from 'react';
import { Nav } from './Nav';
import { Channel } from './Channel';
import { useAuth } from './useAuth';
import Login from './Login';

function App() {
  const user = useAuth();

  return user ? (
    <div className="App">
      <Nav user={user} />
      <Channel user={user} />
    </div>
  ) : (
    <Login />
  );
}

export default App;
