import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-[400px]">

        <h1 className="text-3xl font-bold mb-4">
          Halaman Blog
        </h1>

        <p className="text-gray-600 mb-6">
          Ini adalah halaman blog. Klik tombol di bawah untuk melihat detail artikel.
        </p>

        <Link
          href="/blog/detail"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Lihat Detail Artikel
        </Link>

      </div>

    </main>
  );
}