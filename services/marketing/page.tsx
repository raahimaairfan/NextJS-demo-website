export default async function Marketing() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000); // Simulate a loading delay
  });

  return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Marketing Services
          </h1>
          <p className="text-lg text-gray-600 text-center mb-8">
            Grow your brand with our comprehensive marketing services, tailored to help you reach and engage your audience effectively.
          </p>
  
          {/* Marketing Strategies */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Social Media Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Social Media Marketing</h2>
              <p className="text-gray-600">
                Boost your online presence with targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter.
              </p>
            </div>
  
            {/* SEO Optimization */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">SEO Optimization</h2>
              <p className="text-gray-600">
                Improve your search engine rankings and drive organic traffic to your website with our proven SEO techniques.
              </p>
            </div>
  
            {/* Email Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Marketing</h2>
              <p className="text-gray-600">
                Engage your audience with personalized email campaigns designed to convert subscribers into loyal customers.
              </p>
            </div>
  
            {/* Content Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Content Marketing</h2>
              <p className="text-gray-600">
                Create high-quality content that resonates with your audience and positions your brand as a thought leader in your industry.
              </p>
            </div>
  
            {/* PPC Advertising */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">PPC Advertising</h2>
              <p className="text-gray-600">
                Run effective Pay-Per-Click (PPC) campaigns on Google Ads and other platforms to generate leads and sales quickly.
              </p>
            </div>
  
            {/* Brand Strategy */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Brand Strategy</h2>
              <p className="text-gray-600">
                Build a strong brand identity and connect emotionally with your target audience through tailored brand strategies.
              </p>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    );
  }
  
