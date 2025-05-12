import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSearchSubmit = () => console.log('Searching for:', searchTerm);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const categories = [
    'Design & Creative', 'It & Development', 'Trending', 'Web & Mobile Dev',
    'Writing', 'Sales & Marketing', 'Music & Audio', 'Video & Animation', 'More'
  ];

  const talentsOptions = ['Web Developers', 'Graphic Designers', 'Content Writers', 'SEO Experts'];

  return (
    <div className="bg-white">
      {/* Top Header */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo & Search */}
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <button onClick={toggleMenu} className="md:hidden text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-white"></div>
              </div>
              <span className="font-bold text-xl text-gray-800">LOGO</span>
            </div>
            <div className="hidden md:flex relative ml-4 w-96">
              <input
                type="text"
                placeholder="Search here.."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                className="w-full pl-10 pr-24 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="absolute right-0 top-0 h-full">
                <select className="h-full px-3 text-sm border-l border-gray-200 bg-white rounded-r-md focus:outline-none">
                  <option>Talents</option>
                  <option>Jobs</option>
                  <option>Projects</option>
                </select>
              </div>
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button onClick={() => toggleDropdown('talents')} className="flex items-center text-gray-700 hover:text-green-500">
                Talents <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'talents' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    {talentsOptions.map((option, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-green-500">Find Job</a>
            <a href="#" className="text-gray-700 hover:text-green-500">Find Talents</a>
            <div className="relative">
              <button onClick={() => toggleDropdown('pages')} className="flex items-center text-gray-700 hover:text-green-500">
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'pages' && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#" className="text-green-500 font-medium">Login</a>
            <a href="#" className="bg-green-500 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 transition">Register</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-white"></div>
                </div>
                <span className="font-bold text-xl text-gray-800">LOGO</span>
              </div>
              <button onClick={toggleMenu} className="text-gray-600">
                <X size={24} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search here.."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
            />

            {/* Categories Dropdown in Mobile */}
            <div className="mb-2">
              <button
                onClick={() => toggleDropdown('mobileCategories')}
                className="w-full text-left py-2 text-gray-700 hover:text-green-500 flex justify-between items-center"
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'mobileCategories' && (
                <div className="mt-2 pl-4">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block py-1 text-sm text-gray-700 hover:text-green-500"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="block py-2 text-gray-700 hover:text-green-500">Find Job</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-500">Find Talents</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-green-500">Pages</a>
            <a href="#" className="block py-2 text-green-500">Login</a>
            <a href="#" className="block w-full text-center bg-green-500 text-white px-4 py-2 rounded-full mt-2 font-medium hover:bg-green-600">Register</a>
          </div>
        )}
      </header>

      {/* Bottom Category Navigation - hidden on mobile */}
      <nav className="hidden md:block w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 overflow-x-auto">
          <div className="flex space-x-14">
            {categories.map((category, index) => (
              <a key={index} href="#" className="text-sm text-gray-700 hover:text-green-500">
                {category}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LandingHeader;
