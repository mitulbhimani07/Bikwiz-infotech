import React from 'react';
import logo from '../assets/images/logo.png'; // Adjust the path to your logo image
const Footer = () => {
  return (
    <footer className=" w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8">

          {/* Logo Section - Full width on mobile, then normal column */}
          <div className="sm:col-span-2 lg:col-span-1 md:col-span-3">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-3">Bikwiz Infotech is India’s trusted freelance platform connecting businesses with skilled Indian professionals for quality, flexible, and secure remote work.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Companies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Candidates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Pricing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Blogs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">FAQ's</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Terms of use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Cookie policy</a></li>
            </ul>
          </div>

          {/* Newsletter Column - Full width on mobile */}
          <div className="sm:col-span-2  md:col-span-3 lg:col-span-1">
            <p className="text-gray-600 text-sm md:text-base mb-3">Join & get important news regularly</p>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full p-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm md:text-base hover:bg-white hover:text-black hover:border-1 hover:border-gray-300 whitespace-nowrap">
                Send
              </button>
            </div>
            <p className="text-gray-400 text-xs">We only send interesting and relevant emails.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm md:text-base text-gray-600 mb-4 md:mb-0 text-center md:text-left">
            <span className="mr-3 md:mr-4">Privacy & Terms</span>
            <span>Contact Us</span>
          </div>
          <div className="text-sm md:text-base text-gray-600 mb-4 md:mb-0">
            Copyright @2025 inc.
          </div>
          <div className="flex space-x-4">
            {/* Facebook Icon */}
            {/* <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a> */}

            {/* Twitter/X Icon */}
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            {/* <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a> */}

            {/* YouTube Icon */}
            {/* <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;