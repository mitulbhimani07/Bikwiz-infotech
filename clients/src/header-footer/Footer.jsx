import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-8">
          
          {/* Logo Section - Full width on mobile, then normal column */}
          <div className="sm:col-span-2 lg:col-span-1 md:col-span-3">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                <span className="text-2xl font-bold text-black">Logo</span>
              </div>
            </div>
          </div>
          
          {/* Services Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Companies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Candidates</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Pricing</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Blogs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">FAQ's</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Contact</a></li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Terms of use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm md:text-base">Cookie policy</a></li>
            </ul>
          </div>
          
          {/* Newsletter Column - Full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1 md:col-span-3 lg:col-span-1">
            <h3 className="font-semibold text-xl md:text-2xl mb-3 md:mb-4 text-black">Newsletter</h3>
            <p className="text-gray-600 text-sm md:text-base mb-3">Join & get important news regularly</p>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full p-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button className="bg-green-900 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none text-sm md:text-base hover:bg-green-800 whitespace-nowrap">
                Send
              </button>
            </div>
            <p className="text-gray-400 text-xs">We only send interesting and relevant emails.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm md:text-base text-gray-600 mb-4 md:mb-0 text-center md:text-left">
            <span className="mr-3 md:mr-4">Privacy & Terms</span>
            <span>Contact Us</span>
          </div>
          <div className="text-sm md:text-base text-gray-600 mb-4 md:mb-0">
            Copyright @2025 inc.
          </div>
          <div className="flex space-x-4">
            {/* Social icons remain the same */}
            {[...Array(4)].map((_, i) => (
              <a key={i} href="#" className="text-gray-600 hover:text-green-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Social icon paths */}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;