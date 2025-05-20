import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'; // Adjust the path to your logo image

export default function VerifyOTP() {
  const [theme, setTheme] = useState('light');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timer, setTimer] = useState(60);
  const [email, setEmail] = useState('your.email@example.com'); // Ideally passed via props or context

  // Theme toggle function
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

  // Countdown timer effect
  useEffect(() => {
    if (timer > 0 && !isVerified) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isVerified]);

  // Handle OTP input changes
  const handleOtpChange = (index, value) => {
    // Only allow digits
    if (value && !/^\d*$/.test(value)) return;

    // Update the OTP array
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);

    // Reset any previous errors
    if (isError) {
      setIsError(false);
      setErrorMessage('');
    }

    // Auto-focus next input if value is entered
    if (value && index < otpDigits.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // Handle paste event for OTP
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();

    // Check if pasted content is a 4-digit number
    if (/^\d{4}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtpDigits(digits);
      document.getElementById('otp-3').focus();
    }
  };

  // Handle OTP verification
  const verifyOtp = () => {
    const otpCode = otpDigits.join('');

    // Check if OTP is complete
    if (otpCode.length !== 4) {
      setIsError(true);
      setErrorMessage('Please enter all 4 digits of the code');
      return;
    }

    // For demo purposes - in real app, you would validate with backend
    // Assuming 1234 is the valid OTP for demo
    if (otpCode === '1234') {
      setIsVerified(true);
      setIsError(false);
    } else {
      setIsError(true);
      setErrorMessage('Invalid verification code. Please try again.');
    }
  };

  // Handle resend OTP
  const resendOtp = () => {
    // In a real app, you would call an API to resend the OTP
    console.log('Resending OTP to:', email);
    setTimer(60);
    setIsError(false);
    setErrorMessage('');
  };

  // Format time for display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle key press for navigation between inputs
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      // Focus previous input when backspace is pressed on an empty input
      document.getElementById(`otp-${index - 1}`).focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    } else if (e.key === 'ArrowRight' && index < otpDigits.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <>
      <header className={`${headerBg} ${textColor}  ${borderColor} transition-colors duration-300`}>
        <div className="container mx-auto px-24 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
            </Link>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <h2 className="text-3xl font-bold mt-4">Verify OTP</h2>
            <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {isVerified
                ? 'Your account has been verified successfully!'
                : `Enter the verification code sent to ${email}`}
            </p>
          </div>

          {!isVerified ? (
            <div className="space-y-6">
              <div className="flex justify-center space-x-3">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`w-12 h-12 text-center text-xl font-bold ${inputBgColor} border ${isError ? 'border-red-500' : inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                  />
                ))}
              </div>

              {isError && (
                <p className="text-center text-sm text-red-600">
                  {errorMessage}
                </p>
              )}

              <div className="text-center">
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Didn't receive code? {timer > 0 ? (
                    <span>Resend in {formatTime(timer)}</span>
                  ) : (
                    <button
                      onClick={resendOtp}
                      className="text-orange-500 font-medium hover:underline focus:outline-none"
                    >
                      Resend OTP
                    </button>
                  )}
                </p>
              </div>

              <button
                onClick={verifyOtp}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
              >
                Verify Code
              </button>
            </div>
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
                      Email verification successful!
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/dashboard">
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Continue to Dashboard
                </button>
              </Link>
            </div>
          )}

          <div className="text-center mt-8">
            <Link to="/verify-email" className="text-orange-500 font-medium hover:underline">
              Change Email
            </Link>
            <span className={`mx-2 ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`}>•</span>
            <Link to="/login" className="text-orange-500 font-medium hover:underline">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}