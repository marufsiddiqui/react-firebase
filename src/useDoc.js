import { useEffect, useState } from 'react';
import { db } from './firebase';

export const useDoc = path => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    db.doc(path).onSnapshot(doc => {
      setDoc({
        ...doc.data(),
        id: doc.id,
      });
    });
  });

  return doc;
};
