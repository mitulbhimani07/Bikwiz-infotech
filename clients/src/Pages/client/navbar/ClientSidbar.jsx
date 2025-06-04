import React from 'react';
import {
  LayoutDashboard, Building2, Users, MessageSquare, 
  FileText, Calendar, Settings, HelpCircle, LogOut, ChevronDown
} from 'lucide-react';
import logo from '../../../assets/images/logo.png'
import client from '../../../assets/images/client.png'; // Adjust the path as needed


export default function ClientSidbar() {
  return (
    <div className="w-64 bg-white shadow-sm flex flex-col justify-between h-screen">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center justify-center pt-6 pb-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={150} />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full items-center justify-center mb-3">
            <img 
              src={client}
              alt="User Avatar" 
              className="w-24 h-16 rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-orange-500 mb-1">Anjali Kumar </p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="px-4 space-y-1 text-orange-500">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={Building2} label="Company Profile" />
          <NavItem icon={Users} label="All Applicants" />
          <NavItem icon={MessageSquare} label="Messages" />
          <NavItem icon={FileText} label="Job Listing" />
          <NavItem icon={Calendar} label="My Schedule" />
          <NavItem icon={Settings} label="Account Settings" />
          <NavItem icon={HelpCircle} label="Help Center" />
        </nav>
      </div>

      {/* Logout Section */}
      <div className="px-4 pb-6">
        <button className="flex items-center gap-3 w-full text-left px-4 py-3 text-sm text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
        active 
          ? 'bg-orange-100 text-orange-500 font-medium' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}