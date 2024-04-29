import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <Link href={"/task-1"} className="text-4xl ">
        Task 1
      </Link>
    </main>
  );
}
