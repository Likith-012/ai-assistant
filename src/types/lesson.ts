// src/types/lesson.ts
export interface Lesson {
    id: string;         // Document ID
    title: string;      // Lesson title
    content: string;    // Main content
    createdAt: Date;    // Creation timestamp
    updatedAt: Date;    // Last modified
    tags?: string[];    // Optional categories
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
  }