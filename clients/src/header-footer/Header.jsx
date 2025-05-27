import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Adjust if needed

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    // Add or remove focus styles depending on menu state
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold text-gray-800">
            <Link to="/">
              <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 text-[16px] font-medium text-gray-700">
            <Link to="/" className="hover:text-orange-500 focus:text-orange-500 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500 focus:text-orange-500 transition">
              About Us
            </Link>
            <Link to="/findTalent" className="hover:text-orange-500 focus:text-orange-500 transition">
              Find Talent
            </Link>
            <Link to="/FindWork" className="hover:text-orange-500 focus:text-orange-500 transition">
              Find Work
            </Link>
            <Link to="/blog" className="hover:text-orange-500 focus:text-orange-500 transition">
              Blog
            </Link>
            <Link to="/faqs" className="hover:text-orange-500 focus:text-orange-500 transition">
              FAQ'S
            </Link>
            <Link to="/getInTouch" className="hover:text-orange-500 focus:text-orange-500 transition">
              Get In Touch
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-[16px] font-medium text-gray-800 hover:text-orange-500 focus:text-orange-500 transition"
            >
              Log In
            </Link>
            <Link
              to="/joinas"
              className="bg-orange-500 hover:bg-orange-600 text-white text-[16px] font-medium py-2 px-5 rounded-full transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col space-y-6 text-[16px] font-medium text-gray-700">
            <Link to="/" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              Home
            </Link>
            <Link to="/about" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              About Us
            </Link>
            <Link to="/findTalent" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              Find Talent
            </Link>
            <Link to="/FindWork" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              Find Work
            </Link>
            <Link to="/blog" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              Blog
            </Link>
            <Link to="/faqs" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              FAQ'S
            </Link>
            <Link to="/getInTouch" onClick={toggleMobileMenu} className="hover:text-orange-500 focus:text-orange-500 py-2 border-b border-gray-100">
              Get In Touch
            </Link>
          </nav>

          <div className="flex flex-col space-y-4 mt-8">
            <Link
              to="/login"
              onClick={toggleMobileMenu}
              className="text-[16px] font-medium text-gray-800 hover:text-orange-500 focus:text-orange-500 py-2"
            >
              Log In
            </Link>
            <Link
              to="/joinas"
              onClick={toggleMobileMenu}
              className="bg-orange-500 hover:bg-orange-600 text-white text-[16px] font-medium py-2 px-5 rounded-full transition text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
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
