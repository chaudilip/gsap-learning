import Link from "next/link";

export default function Stagger() {
  const pageLink = {
    lesson20: "/lessons/stagger/lesson20",
  };
  return (
    <div className="flex h-screen w-full items-center justify-center flex-wrap">
      <div className="flex items-center justify-center gap-4 flex-wrap">
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
