import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LuBell } from "react-icons/lu";

export default function ClientHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="bg-[#fff0e5] px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left side - Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">

          </div>

          {/* Right side - Search, Language, and CTA */}
          <div className="flex items-center space-x-4">
            {/* Search Bar (Hidden on mobile) */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search List..."
                className="pl-10 pr-4 py-2 bg-white border border-orange-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300 w-48 text-gray-600"
              />
            </div>

            {/* Language/Globe Icon (Hidden on mobile) */}
            <div className="relative hidden md:block p-2 text-orange-500">
              <LuBell className="h-5 w-5" />

              {/* Red dot */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white"></span>
            </div>


            {/* Post a Job Button */}
            <Link to='/jobpostform'>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 md:px-5 rounded-full font-medium text-xs md:text-sm transition-colors">
                Post a Job
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6">

          {/* Mobile Search Bar */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search List..."
                className="pl-10 pr-4 py-2 bg-white border border-orange-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300 w-full text-gray-600"
              />
            </div>
          </div>

          {/* Mobile Language Button */}
          <div className="mt-4">
            <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-800 bg-white rounded-full border border-orange-200 w-full justify-center">
              <LuBell className="h-4 w-4" />
              <span className="text-sm">Language</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}