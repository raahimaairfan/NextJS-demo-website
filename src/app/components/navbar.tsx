import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-black">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center ">
                <h1 className="text-xl font-bold text-white">Demo Website</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="/clients" className="text-white hover:text-gray-300">Clients</a>
                    </li>
                    <li>
                        <a href="/services" className="text-white hover:text-gray-300">Services</a>
                    </li>
                    <li>
                        <a href="/services/marketing" className="text-white hover:text-gray-300">Marketing</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-300">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
