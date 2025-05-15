import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold text-gray-800">
          Bikwiz Infotech 
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-[16px] font-medium text-gray-700">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">About Us</a>
          <a href="#" className="hover:text-orange-500">Find Talent</a>
          <a href="#" className="hover:text-orange-500">Find Work</a>
          <a href="#" className="hover:text-orange-500">Blog</a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-[16px] font-medium text-gray-800 hover:text-orange-500">
            Log In
          </a>
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white  text-[16px] font-medium py-2 px-5 rounded-full transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
