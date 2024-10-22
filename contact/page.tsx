export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-600 text-center mb-8">
                    We'd love to hear from you! Fill out the form below or reach us through the provided contact details.
                </p>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    {/* Contact Form */}
                    <form className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Your Message"
                                rows={4}
                            ></textarea>
                        </div>

                        {/* Centered Button */}
                        <div className="flex justify-center">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Contact Information */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-gray-600 mb-4">
                            Feel free to contact us through the following details:
                        </p>

                        <p className="text-gray-800 mb-2">
                            <strong>Email:</strong> info@example.com
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>Phone:</strong> +123 456 7890
                        </p>
                        <p className="text-gray-800 mb-2">
                            <strong>Address:</strong> 123 Main Street, City, Country
                        </p>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Working Hours</h2>
                            <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                            <p className="text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
