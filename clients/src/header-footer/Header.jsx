import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-white"></div>
            </div>
            <span className="font-bold text-xl hidden sm:block">LOGO</span>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex relative mx-4 flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search here.."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-green-500">
                Talents
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-green-500">Find Job</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Find Talents</a>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-green-500">
                Pages
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-green-500 font-medium">Login</a>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition duration-300">Register</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search - visible on mobile */}
        <div className="mt-3 md:hidden relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search here.."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-2 pb-3 border-t border-gray-200">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500">Talents</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500">Find Job</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500">Find Talents</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-green-500">Pages</a>
            <div className="mt-3 space-y-2">
              <a href="#" className="block px-3 py-2 text-base font-medium text-green-500">Login</a>
              <a href="#" className="block text-center bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition duration-300 mx-3">Register</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;