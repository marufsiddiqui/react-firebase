import { useEffect, useState } from 'react';
import { db } from './firebase';

const cache = {};
const pendingCache = {};

export const useDoc = path => {
  const [doc, setDoc] = useState(cache[path]);

  useEffect(() => {
    if (doc) {
      return;
    }

    let stillMounted = true;
    const pending = pendingCache[path];
    const promise = pending || (pendingCache[path] = db.doc(path).get());

    promise.then(doc => {
      if (stillMounted) {
        const user = {
          ...doc.data(),
          id: doc.id,
        };
        setDoc(user);
        cache[path] = user;
      }
    });

    return () => {
      stillMounted = false;
    };
  }, [doc, path]);

  return doc;
};
