import { app } from './firebase';
import { 
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

export const db = getFirestore(app);

// Type definition (add to your types)
interface Lesson {
  id: string;
  // add other fields as needed
}

// src/lib/firestore.ts
export async function fetchInitialData(): Promise<Lesson[]> {
  const snapshot = await getDocs(collection(db, 'lessons'));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate(), // Convert Firestore Timestamp
    updatedAt: doc.data().updatedAt.toDate()
  }));
}

export async function fetchPublishedLessons(): Promise<Lesson[]> {
  const q = query(
    collection(db, 'lessons'),
    where('isPublished', '==', true)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Lesson[];
}
