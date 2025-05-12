import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';

function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update isMobile state
  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint in Tailwind
    };

    // Check initial screen size
    checkMobileScreen();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobileScreen);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    };
  }, []);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  
  const handleSearchSubmit = () => {
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  
  const toggleMobileSearch = () => setShowMobileSearch(!showMobileSearch);

  const categories = [
    'Design & Creative', 'It & Development', 'Trending', 'Web & Mobile Dev',
    'Writing', 'Sales & Marketing', 'Music & Audio', 'Video & Animation', 'More'
  ];

  return (
    <div className="bg-white relative">
      {/* Sticky Top Header */}
      <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-40">
        {/* Mobile Search Bar (shown when search icon is clicked) */}
        {isMobile && showMobileSearch && (
          <div className="lg:hidden px-4 py-3 bg-white">
            <div className="relative w-full rounded-md bg-gray-50">
              <input
                type="text"
                placeholder="Search here.."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                onClick={toggleMobileSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                <X size={18} />
              </button>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        )}

        <div className={` mx-auto px-4 py-3 sm:py-4 flex items-center justify-between ${isMobile && showMobileSearch ? 'hidden' : 'block'}`} style={{maxWidth: '1800px'}}>
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleMenu} className="lg:hidden text-gray-600 mr-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-white"></div>
              </div>
              <span className="font-bold text-xl text-gray-800">LOGO</span>
            </div>
            <div className="hidden md:block relative w-full max-w-md lg:max-w-lg mx-4 rounded-md bg-gray-50 ">
            <input
              type="text"
              placeholder="Search here.."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
              className="w-full pl-10 pr-24 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-[14px]"
            />
            <div className="absolute right-0 top-0 h-full">
              <select className="h-full px-3 text-sm border-l text-[14px] border-gray-200 rounded-r-md bg-gray-50" style={{border:"1px solid #e5e7eb"}}>
                <option>Talents</option>
                <option>Jobs</option>
                <option>Projects</option>
              </select>
            </div>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          </div>

          {/* Mobile Search Icon (hidden on desktop) */}
          {/* {isMobile && (
            <button 
              onClick={toggleMobileSearch} 
              className="lg:hidden text-gray-600"
            >
              <Search size={20} />
            </button>
          )} */}

          {/* Desktop Search Bar (hidden on mobile) */}
          

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-[20px] font-medium">
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

        {/* Mobile Sidebar with smooth animation */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div 
              className="absolute inset-0  bg-opacity-50"
              onClick={toggleMenu}
            ></div>
            
            {/* Sidebar */}
            <div className={`absolute top-0 left-0 w-72 h-full bg-white p-5 shadow-lg overflow-y-auto transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="flex items-center justify-between mb-5">
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

              {/* Mobile Search within Sidebar */}
              <div className="mb-4 relative w-full rounded-md bg-gray-50">
                <input
                  type="text"
                  placeholder="Search here.."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>

              {/* Categories Dropdown */}
              <div className="mb-4">
                <button
                  onClick={() => toggleDropdown('mobileCategories')}
                  className="w-full text-left py-2 font-bold text-gray-700 hover:text-green-500 flex justify-between items-center"
                >
                  Categories <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobileCategories' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobileCategories' && (
                  <div className="mt-2 pl-2">
                    {categories.map((category, index) => (
                      <a key={index} href="#" className="block py-2 text-sm text-gray-700 hover:text-green-500">
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="block py-2 text-gray-700 hover:text-green-500 font-bold">Find Job</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-500 font-bold">Find Talents</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-500 font-bold">Pages</a>
              <a href="#" className="block py-2 text-green-500 font-bold">Login</a>
              <a href="#" className="block w-full text-center bg-green-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-green-600 font-bold">Register</a>
            </div>
          </div>
        )}
      </header>

      {/* Bottom Category Navigation (hidden on mobile) */}
      <nav className="hidden lg:block w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex space-x-8.5  font-medium">
            {categories.map((category, index) => (
              <a key={index} href="#" className="text-[16px] text-[#536159] hover:text-green-500 whitespace-nowrap">
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