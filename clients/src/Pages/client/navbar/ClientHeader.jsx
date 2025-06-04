import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  LayoutDashboard, 
  Building2, 
  Users, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronDown,
  MoreHorizontal
} from 'lucide-react';
import logo from '../../../assets/images/logo.png'; // Adjust the path as necessary
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Week');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
             <img src={logo} alt="" width={120}/>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Find Talent</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Find Work</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
            </nav>
          </div>
          
          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            {/* Notification */}
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
            </div>
            
            {/* Post Job Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium">
              Post Job
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen shadow-sm">
          {/* User Profile */}
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-medium text-gray-900">Anjali Kumar</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="px-4 space-y-1">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg">
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Building2 className="w-5 h-5" />
              <span>Company Profile</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Users className="w-5 h-5" />
              <span>All Applicants</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <MessageSquare className="w-5 h-5" />
              <span>Messages</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <FileText className="w-5 h-5" />
              <span>Job Listing</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span>My Schedule</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Settings className="w-5 h-5" />
              <span>Account Settings</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <HelpCircle className="w-5 h-5" />
              <span>Help Center</span>
            </a>
          </nav>
          
          {/* Logout */}
          <div className="absolute bottom-6 left-4 right-4">
            <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}