'use client'; // Must be the VERY FIRST line in the file (no empty lines above)

import { useState, useEffect } from 'react';
import { fetchInitialData } from '@/lib/firestore';
import DashboardList from '@/components/DashboardList';
import DashboardContent from '@/components/DashboardContent';
import { Lesson } from '@/types/lesson';

export default function Dashboard() {
  const [data, setData] = useState<Lesson[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await fetchInitialData();
        setData(initialData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DashboardList lessons={data} />
      <DashboardContent data={data[0]} />
    </div>
  );
}