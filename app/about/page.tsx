import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-lg">

        <h1 className="text-3xl font-bold mb-4">
          About This Project
        </h1>

        <p className="text-gray-600 mb-4">
          Website ini dibuat sebagai bagian dari tugas mata kuliah
          <b> Pemrograman Web II</b>. Project ini menggunakan framework
          <b> Next.js </b> untuk mempelajari konsep routing, komponen,
          dan pengembangan web modern.
        </p>

        <p className="text-gray-600 mb-6">
          Website ini memiliki beberapa halaman seperti Home, Profile,
          dan About yang saling terhubung menggunakan sistem routing
          dari Next.js.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          Kembali ke Home
        </Link>

      </div>

    </main>
  );
}