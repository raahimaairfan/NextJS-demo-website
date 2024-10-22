export default function Clients() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold text-center text-gray-700 mb-6">
                    Our Clients
                </h1>
                <p className="text-center text-gray-700 mb-8">
                    We work with a diverse range of clients from various industries to deliver exceptional services. Here are some of our esteemed clients.
                </p>

                <ul className="space-y-4">
                    <li className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">Client A</h2>
                        <p className="text-gray-600">Industry: Technology</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">Client B</h2>
                        <p className="text-gray-600">Industry: Finance</p>
                    </li>
                    <li className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">Client C</h2>
                        <p className="text-gray-600">Industry: Healthcare</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
