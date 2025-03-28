import { useState, useEffect } from 'react';
import { firestore } from '../../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export function useFirestoreData<T>(collectionPath: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const querySnapshot = await getDocs(collection(firestore, collectionPath));
        const fetchedData: T[] = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() })) as T[];
        setData(fetchedData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionPath]);

  return { data, loading, error };
}