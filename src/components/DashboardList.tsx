'use client';

export default function DashboardList({ lessons }: { lessons: Lesson[] }) {
  return (
    <div>
      {lessons.map(lesson => (
        <div key={lesson.id}>{lesson.title}</div>
      ))}
    </div>
  );
}
import { Lesson } from '@/types/lesson';

export default function DashboardList({ lessons }: { lessons: Lesson[] }) {
  return (
    <div className="border-r p-4">
      <h2 className="text-xl font-bold mb-4">Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id} className="py-2 border-b">
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}