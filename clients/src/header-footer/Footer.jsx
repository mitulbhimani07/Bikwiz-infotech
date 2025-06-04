import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the path to your logo image

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8">

          {/* Logo Section */}
          <div className="sm:col-span-2 lg:col-span-1 md:col-span-3">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
            </div>
            <p className="text-gray-600 text-sm md:text-base mb-3">
              Bikwiz Infotech is India’s trusted freelance platform connecting businesses with skilled Indian professionals for quality, flexible, and secure remote work.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/findWork" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Browse Jobs</Link></li>
              <li><Link to="/findTalent" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Companies</Link></li>
              <li><Link to="/findTalent" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Candidates</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Blogs</Link></li>
              <li><Link to="/faqs" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">FAQ's</Link></li>
              <li><Link to="/getInTouch" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Terms of Use</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Privacy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <p className="text-gray-600 text-sm md:text-base mb-3">Join & get important news regularly</p>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full p-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm md:text-base hover:bg-white hover:text-black hover:border hover:border-gray-300 whitespace-nowrap">
                Send
              </button>
            </div>
            <p className="text-gray-400 text-xs">We only send interesting and relevant emails.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm md:text-base text-gray-600 mb-4 md:mb-0 text-center md:text-left">
            <Link to="/privacy" className="mr-3 md:mr-4 hover:text-orange-500">Privacy & Terms</Link>
            <Link to="/getInTouch" className="hover:text-orange-500">Contact Us</Link>
          </div>
          <div className="text-sm md:text-base text-gray-600 mb-4 md:mb-0">
            &copy; 2025 Bikwiz Infotech
          </div>
          <div className="flex space-x-4">
            {/* Twitter/X Icon */}
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
