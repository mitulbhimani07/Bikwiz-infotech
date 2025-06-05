import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

function ClientFooter() {
  return (
    <footer className="bg-[#fff0e5] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Links */}
        <div className="flex items-center space-x-6">
          <Link 
            href="/privacy" 
            className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
          >
            Privacy & Terms
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Center - Copyright */}
        <div className="text-gray-600 text-sm">
          Copyright © 2025 inc.
        </div>

        {/* Right side - Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link 
            href="#" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            aria-label="Facebook"
          >
           <FiFacebook size={20} />
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <FiTwitter size={20} />
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram  size={20} />
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-red-600 transition-colors duration-200"
            aria-label="YouTube"
          >
            <FiYoutube size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile responsive version */}
      <div className="md:hidden">
        <div className="flex flex-col items-center space-y-3 pt-4 border-t border-orange-200 mt-4">
          <div className="flex items-center space-x-6">
            <a 
              href="/privacy" 
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
            >
              Privacy & Terms
            </a>
            <a 
              href="/contact" 
              className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
          
          <div className="text-gray-600 text-sm">
            Copyright © 2025 inc.
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-red-600 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ClientFooter;