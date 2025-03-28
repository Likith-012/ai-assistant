// src/app/api/lessons/route.ts
import { NextResponse } from 'next/server';
import { fetchPublishedLessons } from '@/lib/firestore'; // Correct import name

export async function GET() {
  try {
    const lessons = await fetchPublishedLessons(); // Using correct function name
    return NextResponse.json(lessons);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    );
  }
}