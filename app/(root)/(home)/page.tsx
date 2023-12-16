import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main>
      <h1 className="h1-bold flex-center">Homepage</h1>
      <Link href="projects/list" className="flex-center">
        see projects
      </Link>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
