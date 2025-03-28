'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { query, collection, where, doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    let unsubscribeUser: () => void;
    let unsubscribeData: () => void;

    const setupSubscriptions = (userId: string) => {
      // User profile subscription
      const userRef = doc(db, 'users', userId);
      unsubscribeUser = onSnapshot(userRef, (doc) => {
        console.log('User updated:', doc.data());
      });

      // Lessons subscription
      const q = query(
        collection(db, 'lessons'),
        where('userId', '==', userId)
      );
      unsubscribeData = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach(change => {
          console.log('Change:', change.type, change.doc.data());
        });
      });
    };

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setupSubscriptions(user.uid);
    });

    return () => {
      authUnsubscribe();
      unsubscribeUser?.();
      unsubscribeData?.();
    };
  }, [router]);

  return <>{children}</>;
}