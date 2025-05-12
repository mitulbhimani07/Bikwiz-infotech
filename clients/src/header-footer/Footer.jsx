import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-50 w-full">
      <div className="bg-green-50 border-t border-gray-200 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-6">
            {/* Logo Section */}
            <div className="mb-8 md:mb-0 md:w-1/5">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xl font-bold">LOGO</span>
              </div>
              <p className="text-gray-500 text-sm">Signup and start find your job or talents.</p>
            </div>
            
            {/* Products Column */}
            <div className="mb-8 md:mb-0 md:w-1/5">
              <h3 className="font-semibold text-base mb-4">Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Take the tour</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Live chat</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Self-service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Mobile</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Collaboration</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Reviews</a></li>
              </ul>
            </div>
            
            {/* Links Column */}
            <div className="mb-8 md:mb-0 md:w-1/5">
              <h3 className="font-semibold text-base mb-4">Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div className="mb-8 md:mb-0 md:w-1/5">
              <h3 className="font-semibold text-base mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of use</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms & conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Cookie policy</a></li>
              </ul>
            </div>
            
            {/* Newsletter Column */}
            <div className="md:w-1/5">
              <h3 className="font-semibold text-base mb-4">Newsletter</h3>
              <p className="mb-3 text-sm">Join & get important new regularly</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-500 flex-grow text-sm"
                />
                <button className="bg-gray-800 text-white py-2 px-4 rounded-r hover:bg-gray-700 text-sm">
                  Send
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2">We only send interesting and relevant emails.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;