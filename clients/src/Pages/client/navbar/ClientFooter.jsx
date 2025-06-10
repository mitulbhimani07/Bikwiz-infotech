import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

function ClientFooter() {
  return (
    <footer className="bg-[#fff0e5] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <Link
            to="/privacy"
            className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
          >
            Privacy & Terms
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm text-center">
          © 2025 inc. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <FiFacebook size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FiTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-red-600 transition-colors duration-200"
            aria-label="YouTube"
          >
            <FiYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ClientFooter;
