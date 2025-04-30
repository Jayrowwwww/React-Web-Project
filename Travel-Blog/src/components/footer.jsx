import { Link } from "react-router-dom"

export default function Footer(){

    return(
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-plane text-white text-sm"></i>
                </div>
                SKYWINGS
              </div>
              <p className="text-gray-400 mb-4">
                Elevating your travel experience since 2010.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="https://readdy.ai/home/93009027-9e16-44f5-8b30-59cb8b83f647/5c5fdfb5-8726-4df5-8081-048acd83c5ce"
                    data-readdy="true"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2 text-blue-400"></i>
                  <span className="text-gray-400">
                    123 Aviation Way, Skyline Tower, New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-400"></i>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-400"></i>
                  <span className="text-gray-400">info@skywings.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates on special offers and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full w-full border-none text-sm"
                />
                <button className="bg-blue-500 px-4 py-2 rounded-r-full !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
              <div className="mt-4 flex space-x-3">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 SKYWINGS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}