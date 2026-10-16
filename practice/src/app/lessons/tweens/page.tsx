import Link from "next/link";

export default function Tweees() {
  const pageLink = {
    lesson1: "/lessons/tweens/lesson1",
    lesson2: "/lessons/tweens/lesson2",
    lesson3: "/lessons/tweens/lesson3",
    lesson4: "/lessons/tweens/lesson4",
    lesson5: "/lessons/tweens/lesson5",
    lesson6: "/lessons/tweens/lesson6",
    lesson7: "/lessons/tweens/lesson7",
    lesson8: "/lessons/tweens/lesson8",
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        {Object.keys(pageLink).map((lesson) => (
          <Link
            key={lesson}
            href={pageLink[lesson as keyof typeof pageLink]}
            className="bg-amber-200 h-24 w-24 flex items-center justify-center rounded-md text-amber-900"
          >
            {lesson}
          </Link>
        ))}
      </div>
    </div>
  );
}
