'use client';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user && router) router.push('/login');
  }, [user, router]);  // Add router to deps

  return user ? children : null;
}