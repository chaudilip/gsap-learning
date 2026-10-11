import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Link
        href="/lessons/tweens"
        className="p-2 bg-zinc-100 text-blue-800 rounded-md"
      >
        Lesson 1
      </Link>
    </div>
  );
}
