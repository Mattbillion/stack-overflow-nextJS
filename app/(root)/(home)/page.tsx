import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="h1-bold flex-center">Homepage</h1>
      <Link href="projects/list" className="flex-center">
        see projects
      </Link>
    </main>
  );
}
