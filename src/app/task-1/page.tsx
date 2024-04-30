import Link from "next/link";

export default function Task1() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <Link href={"/task-1/radix-ui"} className="text-4xl">
        Radix-UI
      </Link>
      <Link href={"/task-1/shadcn-ui"} className="text-4xl">
        Shadcn-UI
      </Link>
      <Link href={"/task-1/minimal-ui"} className="text-4xl">
        Minimal-UI
      </Link>
    </main>
  );
}
