import React, { useEffect } from 'react';
import { Search, Bell } from 'lucide-react';

export default function ClientHeader() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="bg-[#fff0e5] px-4 sm:px-6 py-3 sticky top-0 z-999 shadow-sm">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        

        {/* Right Section - All items in one row */}
        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
          {/* Search - Flexible width */}
          <div className="relative flex-1 max-w-[160px] sm:max-w-[200px]">
            <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="pl-7 sm:pl-10 pr-2 sm:pr-4 py-1.5 sm:py-2 bg-white border border-orange-200 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-300 focus:border-orange-300 w-full text-gray-600"
            />
          </div>

          {/* Notification Bell - Compact */}
          <div className="relative text-orange-500 flex items-center justify-center flex-shrink-0 p-1">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-0.5 -right-0.5 sm:top-0 sm:right-0 block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-600 ring-1 sm:ring-2 ring-white" />
          </div>

          {/* CTA Button - Compact on mobile */}
          <button 
            onClick={() => console.log('Navigate to job post form')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-colors whitespace-nowrap flex-shrink-0"
          >
            Post Job
          </button>
        </div>
      </div>
    </header>
  );
}