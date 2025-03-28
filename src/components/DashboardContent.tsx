// src/components/DashboardContent.tsx
'use client';

interface DashboardContentProps {
  data: {
    id: string;
    // Add other expected props
  }[];
}

export default function DashboardContent({ data }: DashboardContentProps) {
  return (
    <div className="dashboard-content">
      {data.map(item => (
        <div key={item.id}>
          {/* Render your content here */}
          {JSON.stringify(item)}
        </div>
      ))}
    </div>
  );
}
import { Lesson } from '@/types/lesson';

export default function DashboardContent({ data }: { data: Lesson }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <div className="prose mt-4">
        {data.content}
      </div>
    </div>
  );
}