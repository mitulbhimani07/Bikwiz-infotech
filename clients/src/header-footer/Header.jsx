import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold text-gray-800">
            Bikwiz Infotech
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex space-x-6 text-[16px] font-medium text-gray-700">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">About Us</a>
            <a href="#" className="hover:text-orange-500">Find Talent</a>
            <a href="#" className="hover:text-orange-500">Find Work</a>
            <a href="#" className="hover:text-orange-500">Blog</a>
          </nav>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[16px] font-medium text-gray-800 hover:text-orange-500">
              Log In
            </a>
            <a
              href="/joinas"
              className="bg-orange-500 hover:bg-orange-600 text-white text-[16px] font-medium py-2 px-5 rounded-full transition"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6 text-[16px] font-medium text-gray-700">
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Home</a>
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">About Us</a>
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Find Talent</a>
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Find Work</a>
            <a href="#" className="hover:text-orange-500 py-2 border-b border-gray-100">Blog</a>
          </nav>

          <div className="flex flex-col space-y-4 mt-8">
            <a href="#" className="text-[16px] font-medium text-gray-800 hover:text-orange-500 py-2">
              Log In
            </a>
            <a
              href="/joinas"
              className="bg-orange-500 hover:bg-orange-600 text-white text-[16px] font-medium py-2 px-5 rounded-full transition text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Header;