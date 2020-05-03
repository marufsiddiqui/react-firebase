import React from 'react';
import { firebase } from './firebase';

function Login() {
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };

  return (
    <div className="Login">
      <h1>Chat</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
