import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1>Memmory</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
