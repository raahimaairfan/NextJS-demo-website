export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We are dedicated to delivering top-notch services and solutions. Explore our site to learn more about what we offer.
        </p>

        {/* Feature Section */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Innovative Solutions</h2>
            <p className="text-gray-600">
              We provide cutting-edge solutions tailored to your business needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h2>
            <p className="text-gray-600">
              Our team consists of industry experts with years of experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Client Focused</h2>
            <p className="text-gray-600">
              We put our clients at the center of everything we do.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
