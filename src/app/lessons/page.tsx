// app/lessons/page.tsx
import { fetchPublishedLessons } from '@/lib/firestore';
// Define the Lesson type if not already defined
// type Lesson = {
//   id: string;
//   title: string;
// };

export default async function LessonsPage() {
  // Server-side fetch (no client-side loading state needed)
  const lessons = await fetchPublishedLessons();

  return (
    <main>
      <h1>All Lessons</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </main>
  );
}