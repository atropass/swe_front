import Head from 'next/head';

export default function Login() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Login Page</title>
      </Head>
      
      <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Log in</h1>
        <form>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email or phone number
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="mt-1 mb-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter email or phone number"
          />

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 mb-4 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter password"
          />

          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Select
          </label>
          <select
            id="role"
            name="role"
            className=" text-black block w-full pl-3 pr-10 py-2 mt-1 mb-6 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Admin</option>
            <option>Driver</option>
            <option>Fueling person</option>
            <option>Maintenance person</option>
          </select>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
