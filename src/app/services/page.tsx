export default function Services() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Our Services
                </h1>
                <p className="text-lg text-gray-600 text-center mb-8">
                    We provide a variety of services tailored to meet your business needs, ensuring efficient solutions and exceptional results.
                </p>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                    {/* Consulting */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Consulting</h2>
                        <p className="text-gray-600">
                            Our expert consultants offer personalized strategies and insights to help your business grow.
                        </p>
                    </div>

                    {/* Development */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Development</h2>
                        <p className="text-gray-600">
                            We provide development services for websites, mobile apps, and custom software solutions.
                        </p>
                    </div>

                    {/* Support */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Support</h2>
                        <p className="text-gray-600">
                            Our 24/7 support ensures your business operations run smoothly with minimal interruptions.
                        </p>
                    </div>

                    {/* Design */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Design</h2>
                        <p className="text-gray-600">
                            We create stunning, user-friendly designs for websites, apps, and digital products that align with your brand.
                        </p>
                    </div>

                    {/* Marketing */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Marketing</h2>
                        <p className="text-gray-600">
                            Our marketing experts craft data-driven strategies to increase brand awareness and engagement.
                        </p>
                    </div>

                    {/* Cybersecurity */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Cybersecurity</h2>
                        <p className="text-gray-600">
                            We provide top-notch security solutions to safeguard your data and prevent cyber threats.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}