export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-2xl text-gray-600">
            Oops! The page you searched for is not found.
          </p>
          <p className="mt-2 text-lg text-gray-500">
            It looks like the page doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
  