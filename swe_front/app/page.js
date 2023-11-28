import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Welcome to VMS</title>
      </Head>
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-black">
          Welcome to <span className="text-blue-600">VMS</span>
        </h1>
        <p className="mt-3 text-2xl">
          Vehicle Management System
        </p>

        <div className="mt-6">
          <Link href="/pages/login">
          <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-lg font-medium text-gray-900 rounded-full shadow-2xl group bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 before:absolute before:inset-0 before:bg-white before:rounded-full before:scale-0 before:opacity-30 before:transition before:duration-300 hover:before:scale-150 hover:before:opacity-0 after:absolute after:inset-0 after:w-full after:h-full after:rounded-full after:transition-all after:duration-300 after:bg-gradient-to-br after:from-pink-500 after:via-red-500 after:to-yellow-500 after:opacity-0 hover:after:opacity-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-opacity-75">
            Go to Login
            <span className="absolute right-0 bottom-0 w-20 h-20 -mb-12 -mr-12 transition-all duration-300 ease-linear bg-blue-300 rounded-full opacity-50 group-hover:opacity-70 group-hover:mb-3 group-hover:mr-3"></span>
            <span className="absolute left-0 top-0 w-20 h-20 -mt-12 -ml-12 transition-all duration-300 ease-linear bg-purple-300 rounded-full opacity-50 group-hover:opacity-70 group-hover:mt-3 group-hover:ml-3"></span>
          </button>

          </Link>
        </div>
      </main>
    </div>
  );
}
