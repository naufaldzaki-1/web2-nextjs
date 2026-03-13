import Link from "next/link";

export default function DetailPage() {
  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg">

        <h1 className="text-3xl font-bold mb-4">
          Detail Artikel
        </h1>

        <p className="text-gray-600 mb-4">
          Ini adalah halaman detail artikel pada nested route Next.js.
        </p>

        <p className="text-gray-600 mb-6">
          Nested routing memungkinkan kita membuat URL bertingkat
          seperti /blog/detail sesuai dengan struktur folder.
        </p>

        <Link
          href="/blog"
          className="inline-block bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
        >
          Kembali ke Blog
        </Link>

      </div>

    </main>
  );
}