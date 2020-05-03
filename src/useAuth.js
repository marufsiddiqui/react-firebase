import { useEffect, useState } from 'react';
import { firebase } from './firebase';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return user;
}
