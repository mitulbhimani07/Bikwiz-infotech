import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VerifyEmail() {
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Dynamic style based on theme
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
  const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

  // Handle email change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset validation state when user types
    if (!isValid) {
      setIsValid(true);
      setErrorMessage('');
    }
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setIsValid(false);
      setErrorMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setIsValid(false);
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send the verification email here
    console.log('Sending verification email to:', email);
    setIsSubmitted(true);
  };

  return (
    <>
        <header className={`${headerBg} ${textColor}  ${borderColor} transition-colors duration-300`}>
        <div className="container mx-auto px-24 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <span className="font-bold text-xl">Bikwiz Infotech</span>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>
      </header>
    
    <div className={`min-h-screen flex items-center justify-center ${pageBgColor} px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      <div className={`max-w-md w-full p-8 rounded-lg ${textColor} transition-colors duration-300`}>
        
        <div className="text-center mb-8">
          <svg className="mx-auto h-16 w-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <h2 className="text-3xl font-bold mt-4">Verify Your Email</h2>
          <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
            {isSubmitted ? 
              `We've sent a verification code to ${email}` : 
              'Enter your email address to receive a verification code'}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                className={`appearance-none block w-full px-3 py-3 border ${isValid ? inputBorderColor : 'border-red-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor} transition-colors duration-200`}
                placeholder="your.email@example.com"
              />
              {!isValid && (
                <p className="mt-2 text-sm text-red-600">
                  {errorMessage}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
              >
                Send Verification Code
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className={`text-sm ${theme === 'light' ? 'text-green-800' : 'text-green-200'}`}>
                    A verification code has been sent to your email.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
            >
              Change Email
            </button>
          </div>
        )}

        <div className="text-center mt-8">
          <a href="#" className="text-orange-500 font-medium hover:underline">
            <Link to="/login">
              Back to Sign In
            </Link>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}