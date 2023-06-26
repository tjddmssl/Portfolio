import Link from "next/link";
import { LuFlower2 } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center pl-3 pt-3">
          <h1 className="text-2xl font-bold text-pink-500 ml-4">
            {"SungEun's Portfolio"}
          </h1>
          <LuFlower2 className="text-3xl mx-1 text-pink-500 md:hidden" />
        </div>
      </Link>
      <nav className="flex gap-4 mt-5 font-bold text-pink-500 text-lg p-3 mr-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/assets/resume.pdf" target="_blank">
          Resume
        </Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
