import { useEffect, useState } from 'react';
import { db } from './firebase';

export const useCollection = (path, orderBy) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let collection = db.collection(path);

    if (orderBy) {
      collection = collection.orderBy(orderBy);
    }

    return collection.onSnapshot(snapshot =>
      setDocs(
        snapshot.docs.map(d => ({
          ...d.data(),
          id: d.id,
        }))
      )
    );
  }, [path, orderBy]);

  return docs;
};
