export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    About Us
                </h1>
                <p className="text-lg text-gray-600 text-center mb-10">
                    Welcome to the About page! Here, you can learn more about our mission, vision, and values. 
                    We are dedicated to providing the best services to our clients while maintaining a positive impact on the world.
                </p>

                {/* Mission Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Our mission is to deliver innovative solutions that empower businesses and individuals. 
                        We strive to create a sustainable and inclusive future by focusing on integrity, quality, and customer satisfaction.
                    </p>
                </div>

                {/* Values Section */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Our Values
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Integrity and Transparency
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Customer-Centric Approach
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Innovation and Excellence
                        </li>
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                            </svg>
                            Sustainability and Social Responsibility
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

