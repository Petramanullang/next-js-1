import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl">Testing</h1>
      <br />
      <Link href="/posts" className="text-3xl">Posts</Link>
      <br />
      <Link href='/albums' className="text-3xl">Albums</Link>
    </>
  );
}
