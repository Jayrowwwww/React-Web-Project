import { Link } from 'react-router-dom'

export default function Header(){

    return(
        <header className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
                <div className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                        <i className="fas fa-plane text-white text-sm"></i>
                    </div>
                    <h1>SKYWINGS</h1>
                </div>
            </div>

            <nav className="hidden md:flex space-x-8">
                <Link
                to="/"
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                HOME
                </Link>
                <Link
                    to="/about"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    ABOUT
                </Link>
                <Link
                    to="/tour"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    TOUR
                </Link>
                <Link
                    to="/package"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    PACKAGE
                </Link>
                <Link
                    to="/contact"
                    className="text-gray-600 hover:text-blue-500 cursor-pointer"
                >
                    CONTACT
                </Link>
            </nav>

            <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
                Book Trip
            </button>
        </header>
    )
}