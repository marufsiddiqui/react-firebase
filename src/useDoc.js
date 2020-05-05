import { useEffect, useState } from 'react';
import { db } from './firebase';

export const useDoc = path => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    let stillMounted = true;
    db.doc(path)
      .get()
      .then(doc => {
        if (stillMounted) {
          setDoc({
            ...doc.data(),
            id: doc.id,
          });
        }
      });
    return () => {
      stillMounted = false;
    };
  }, [path]);

  return doc;
};
