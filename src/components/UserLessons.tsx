// components/UserLessons.tsx
'use client';
import { useEffect, useState } from 'react';
import { fetchUserLessons } from '@/lib/firestore';
import LessonCard from './LessonCard'; // Import at the top

// Define or import the Lesson type if not already defined
// type Lesson = {
//   id: string;
//   title: string;
//   // Add other properties as needed
// };

export default function UserLessons({ userId }: { userId: string }) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchUserLessons(userId);
        setLessons(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userId]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {lessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} /> // Render LessonCard for each lesson
          ))}
        </div>
      )}
    </div>
  );
}