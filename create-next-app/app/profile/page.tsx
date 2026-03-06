import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-200">

      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-[350px]">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          Naufal Dzaki Mu'aafii
        </h1>

        <p className="text-gray-600 mb-1">
          NIM: 3.34.24.0.16
        </p>

        <p className="text-gray-600 mb-6">
          Minat: Web Development & Next.js
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Kembali ke Home
        </Link>

      </div>

    </main>
  );
}