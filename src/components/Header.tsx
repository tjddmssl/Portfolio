import Link from "next/link";
import { LuFlower2 } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 mx-4 ">
      <Link href="/">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-pink-500">Portfolio</h1>
          <LuFlower2 className="text-3xl mx-1 text-pink-500" />
        </div>
      </Link>
      <nav className="flex gap-4 mt-5 font-bold text-pink-500 text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
