import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'; // Adjust the path to your logo image

export default function ResetPassword() {
  const [theme, setTheme] = useState('light');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSubmit = () => {
    if (!newPassword || !confirmPassword) {
      alert("Both password fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log('New Password:', newPassword);
    // Add API request logic here
  };

  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
  const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

  return (
    <>
      <header className={`${headerBg} ${textColor} ${borderColor} transition-colors duration-300`}>
        <div className="container mx-auto px-24 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1z..." clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className={`min-h-screen flex items-center justify-center ${pageBgColor} px-4 transition-colors duration-300`}>
        <div className={`max-w-md w-full p-8 rounded-lg ${textColor}`}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Set New Password</h2>
            <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              Enter and confirm your new password.
            </p>
          </div>

          <div className="space-y-5">
            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor}`}
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor}`}
                placeholder="Re-enter password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Update Password
              </button>
            </div>

            {/* Back to Login */}
            <div className="text-sm text-center mt-6">
              <Link to="/login" className="text-orange-500 hover:underline">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
