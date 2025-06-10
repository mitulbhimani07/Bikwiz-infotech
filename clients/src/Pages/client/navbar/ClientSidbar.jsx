import React, { useState } from 'react';
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

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-[#00000017] bg-opacity-100 z-30"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static z-40
        top-0 left-0 h-full w-64 sm:w-72
        bg-white shadow-lg lg:shadow-sm
        flex flex-col justify-between
        overflow-y-auto
        transition-transform duration-300 ease-in-out
        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top Logo */}
        <div className="flex-1">
          <div className="flex items-center justify-center pt-6 pb-6 lg:pb-8 px-4">
            <img
              src={logo}
              alt="Logo"
              className="w-32 sm:w-36 lg:w-40 xl:w-44 h-auto"
            />
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center mb-6 lg:mb-8 px-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mb-3 overflow-hidden">
              <img
                src={client}
                alt="User Avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-sm lg:text-base font-semibold text-orange-500 mb-1">Anjali Kumar</p>
          </div>

          {/* Navigation */}
          <nav className="px-3 lg:px-4 space-y-1 text-orange-500">
            <NavItem icon={LayoutDashboard} label="Dashboard" to="/ClientDashboard" active={isActive('/ClientDashboard')} onClick={handleNavClick} />
            <NavItem icon={Building2} label="Company Profile" to="/clientCompanyProfile" active={isActive('/clientCompanyProfile')} onClick={handleNavClick} />
            <NavItem icon={Users} label="All Applicants" to="/clientAllApplications" active={isActive('/clientAllApplications')} onClick={handleNavClick} />
            <NavItem icon={MessageSquare} label="Messages" to="/ClientMessages" active={isActive('/ClientMessages')} onClick={handleNavClick} />
            <NavItem icon={FileText} label="Job Listing" to="/clientJobListing" active={isActive('/clientJobListing')} onClick={handleNavClick} />
            <NavItem icon={Calendar} label="My Schedule" to="/clientSchedule" active={isActive('/clientSchedule')} onClick={handleNavClick} />
            <NavItem icon={Settings} label="Account Settings" to="/clientSettings" active={isActive('/clientSettings')} onClick={handleNavClick} />
            <NavItem icon={HelpCircle} label="Help Center" to="/clientHelpCenter" active={isActive('/clientHelpCenter')} onClick={handleNavClick} />
          </nav>
        </div>

        {/* Logout */}
        <div className="px-3 lg:px-4 pb-4 lg:pb-6 mt-4">
          <button
            className="flex items-center gap-3 w-full text-left px-3 lg:px-4 py-3 text-sm lg:text-base text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
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
      className={`flex items-center gap-3 w-full text-left px-3 lg:px-4 py-3 rounded-lg transition-colors text-sm lg:text-base no-underline ${
        active
          ? 'bg-orange-100 text-orange-500 font-medium'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
      }`}
    >
      <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
      <span className="truncate">{label}</span>
    </Link>
  );
}
