import React from 'react';
import { Search, Globe } from 'lucide-react';

export default function ClientHeader() {
  return (
    <header className="bg-pink-50 border-b border-pink-100 px-6 py-3 w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Navigation */}
        <div className="flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-900 font-normal text-sm">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 font-normal text-sm">
              About Us
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 font-normal text-sm">
              Find Talent
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 font-normal text-sm">
              Find Work
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 font-normal text-sm">
              Blog
            </a>
          </nav>
        </div>

        {/* Right side - Search, Language, and CTA */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search List..."
              className="pl-10 pr-4 py-2 bg-white border border-orange-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300 w-48 text-gray-600"
            />
          </div>

          {/* Language/Globe Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-800 bg-white rounded-full border border-orange-200">
            <Globe className="h-4 w-4" />
          </button>

          {/* Post a Job Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium text-sm transition-colors">
            Post a Job
          </button>
        </div>
      </div>
    </header>
  );
}