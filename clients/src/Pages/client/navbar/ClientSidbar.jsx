import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard, Building2, Users, MessageSquare,
  FileText, Calendar, Settings, HelpCircle, LogOut,
  Menu, X
} from 'lucide-react';
import logo from '../../../assets/images/logo.png';
import client from '../../../assets/images/client.png';
import { Link, useLocation } from 'react-router-dom';

export default function ClientSidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavClick = () => setIsMobileMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        /* Hide scrollbar by default, show only on hover */
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          scroll-behavior: smooth;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
          transition: width 0.3s ease;
        }
        
        /* Show scrollbar on hover */
        .custom-scrollbar:hover {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 146, 60, 0.6) transparent;
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 6px;
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(251, 146, 60, 0.6);
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 146, 60, 0.8);
        }
        
        .custom-scrollbar:hover::-webkit-scrollbar-thumb:active {
          background: rgba(249, 115, 22, 0.9);
        }
        
        /* Navigation area specific scrollbar */
        .nav-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
        }
        
        .nav-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        
        .nav-scrollbar:hover {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 146, 60, 0.5) transparent;
        }
        
        .nav-scrollbar:hover::-webkit-scrollbar {
          width: 3px;
        }
        
        .nav-scrollbar:hover::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
          margin: 4px 0;
        }
        
        .nav-scrollbar:hover::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, rgba(251, 146, 60, 0.4), rgba(251, 146, 60, 0.6));
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        
        .nav-scrollbar:hover::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, rgba(251, 146, 60, 0.7), rgba(249, 115, 22, 0.8));
        }
        
        /* Smooth fade-in animation for scrollbar */
        @keyframes fadeInScrollbar {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .nav-scrollbar:hover::-webkit-scrollbar-thumb {
          animation: fadeInScrollbar 0.2s ease-in;
        }
      `}</style>

      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-3 left-3 z-[1000] p-2.5 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 shadow-lg"
        aria-label="Toggle sidebar menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-gray-700" />
        ) : (
          <Menu className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[900] backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static z-[950]
        top-0 left-0 h-full w-64 sm:w-72
        bg-gradient-to-b from-white to-gray-50
        shadow-xl lg:shadow-sm border-r border-gray-100
        flex flex-col justify-between
        overflow-y-auto custom-scrollbar
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex-1">
          <div className="flex items-center justify-center pt-6 pb-6 lg:pb-8 px-4 bg-white/50 backdrop-blur-sm">
            <Link to="/">  <img
              src={logo}
              alt="Logo"
              className="w-32 sm:w-36 lg:w-40 xl:w-44 h-auto drop-shadow-sm"
            />
            </Link>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6 lg:mb-8 px-4 bg-white/30 backdrop-blur-sm mx-3 rounded-xl py-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mb-3 overflow-hidden ring-4 ring-orange-100 shadow-lg">
              <img
                src={client}
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-sm lg:text-base font-semibold text-orange-500 mb-1">Anjali Kumar</p>
            <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 lg:px-4 space-y-1 text-orange-500 overflow-y-auto nav-scrollbar max-h-96"
               style={{ maxHeight: 'calc(100vh - 400px)' }}>
            <NavItem 
              icon={LayoutDashboard} 
              label="Dashboard" 
              to="/ClientDashboard" 
              active={isActive('/ClientDashboard')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={Building2} 
              label="Company Profile" 
              to="/clientCompanyProfile" 
              active={isActive('/clientCompanyProfile')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={Users} 
              label="All Applicants" 
              to="/clientAllApplications" 
              active={isActive('/clientAllApplications')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={MessageSquare} 
              label="Messages" 
              to="/ClientMessages" 
              active={isActive('/ClientMessages')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={FileText} 
              label="Job Listing" 
              to="/clientJobListing" 
              active={isActive('/clientJobListing')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={Calendar} 
              label="My Schedule" 
              to="/clientSchedule" 
              active={isActive('/clientSchedule')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={Settings} 
              label="Account Settings" 
              to="/clientSettings" 
              active={isActive('/clientSettings')} 
              onClick={handleNavClick} 
            />
            <NavItem 
              icon={HelpCircle} 
              label="Help Center" 
              to="/clientHelpCenter" 
              active={isActive('/clientHelpCenter')} 
              onClick={handleNavClick} 
            />
          </nav>
        </div>

        {/* Logout Button */}
        <div className="px-3 lg:px-4 pb-4 lg:pb-6 mt-4 bg-white/30 backdrop-blur-sm mx-3 rounded-xl">
          <button
            className="flex items-center gap-3 w-full text-left px-3 lg:px-4 py-3 text-sm lg:text-base text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 hover:shadow-md border border-transparent hover:border-orange-200"
            onClick={handleNavClick}
          >
            <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

function NavItem({ icon: Icon, label, to, active = false, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 w-full text-left px-3 lg:px-4 py-3 rounded-lg transition-all duration-200 text-sm lg:text-base no-underline relative overflow-hidden ${
        active
          ? 'bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 font-medium shadow-sm border border-orange-200'
          : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:text-gray-800 hover:shadow-sm'
      }`}
    >
      {active && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full"></div>
      )}
      <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
      <span className="truncate">{label}</span>
    </Link>
  );
}