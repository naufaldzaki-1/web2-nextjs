import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
        
    <div className="font-bold text-lg">
        OpgWebsite
      </div>

      <div className="flex gap-8">
      <Link href="/" className="hover:text-yellow-400">
        Home
      </Link>

      <Link href="/profile" className="hover:text-yellow-400">
        Profile
      </Link>

      <Link href="/blog" className="hover:text-yellow-400">
        Blog
      </Link>

      <Link href="/about" className="hover:text-yellow-400">
        About
      </Link>
    </div>
    </nav>
  );
}