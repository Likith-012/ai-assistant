export default function Dashboard() {
    const lessons = [
      { id: '1', title: 'Intro to Math', videoUrl: 'https://example.com/sample.mp4' }
    ];
    return (
      <div>
        <h1>Your Lessons</h1>
        {lessons.map(lesson => (
          <a key={lesson.id} href={`/lesson/${lesson.id}`}>{lesson.title}</a>
        ))}
      </div>
    );
  }