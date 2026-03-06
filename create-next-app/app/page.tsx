import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        
        <h1 className="text-3xl font-bold mb-4">
          Welcome to My Next.js Website
        </h1>

        <p className="mb-6 text-gray-600">
          Klik tombol di bawah untuk melihat profil saya
        </p>

        <Link
          href="/profile"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Lihat Profil
        </Link>

      </div>
    </main>
  );
}