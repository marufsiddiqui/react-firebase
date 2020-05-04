import React, { useState } from 'react';
import { firebase } from './firebase';

function Login() {
  const [authError, setAuthError] = useState(null);
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (e) {
      setAuthError(e);
    }
  };

  return (
    <div className="Login">
      <h1>Chat</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
      {authError && (
        <div>
          <p>Sorry, there was a problem</p>
          <p>
            <i>{authError.message}</i>
          </p>
          <p>Please try again</p>
        </div>
      )}
    </div>
  );
}

export default Login;
