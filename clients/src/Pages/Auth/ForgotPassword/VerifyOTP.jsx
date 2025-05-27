import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import logo2 from '../../../assets/images/logo2.png';
import { useSelector, useDispatch } from 'react-redux';
import { verifyotp } from '../../../API/Api';
import toast from 'react-hot-toast';


export default function VerifyOTP() {
  const [theme, setTheme] = useState('light');
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timer, setTimer] = useState(60);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const verifyEmail = useSelector((state) => state.counter?.email);

  useEffect(() => {
    if (verifyEmail) {
      console.log("verifyEmail:", verifyEmail); // One-time log
    }
  }, [verifyEmail]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const inputBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const inputBorderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
  const pageBgColor = theme === 'light' ? 'bg-white' : 'bg-gray-950';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  const headerBg = theme === 'light' ? 'bg-white' : 'bg-gray-950';

  useEffect(() => {
    if (timer > 0 && !isVerified) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isVerified]);

  const handleOtpChange = (index, value) => {
    if (value && !/^\d*$/.test(value)) return;

    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = value;
    setOtpDigits(newOtpDigits);

    if (isError) {
      setIsError(false);
      setErrorMessage('');
    }

    if (value && index < otpDigits.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    } else if (e.key === 'ArrowRight' && index < otpDigits.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    if (/^\d{4}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtpDigits(digits);
      document.getElementById('otp-3')?.focus();
    }
  };

  const verifyOtp = async () => {
    const otpCode = otpDigits.join('');

    if (otpCode.length !== 4) {
      setIsError(true);
      setErrorMessage('Please enter all 4 digits of the code');
      return;
    }

    try {
      const payload = {
        email: verifyEmail,
        otp: otpCode,
      };

      const response = await verifyotp(payload, dispatch);
      console.log("OTP verified:", response);
      toast.success("OTP Verify SuccessFully!!")
      navigate('/resetpassword')
      setIsVerified(true);
    } catch (error) {
      setIsError(true);
      toast.error("OTP Invalid.Please try again.")
      setErrorMessage('Invalid verification code. Please try again.');
    }
  };

  const resendOtp = () => {
    console.log('Resending OTP to:', verifyEmail);
    setTimer(60);
    setIsError(false);
    setErrorMessage('');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <>
      <header className={`${headerBg} ${textColor} ${borderColor} transition-colors duration-300`}>
        <div className="container mx-auto px-24 py-5 flex justify-between items-center">
          <Link to="/">
            <img src={theme === 'light' ? logo : logo2} alt="Logo" width={130} height={130} />
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`min-h-screen flex items-center justify-center ${pageBgColor} px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
        <div className={`max-w-md w-full p-8 rounded-lg ${textColor} transition-colors duration-300`}>
          <div className="text-center mb-8">
            <svg className="mx-auto h-16 w-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-3xl font-bold mt-4">Verify OTP</h2>
            <p className={`mt-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
              {isVerified
                ? 'Your account has been verified successfully!'
                : `Enter the verification code sent to ${verifyEmail}`}
            </p>
          </div>

          <div className="space-y-6">
              <div className="flex justify-center space-x-3">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    name="otp"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`w-12 h-12 text-center text-xl font-bold ${inputBgColor} border ${isError ? 'border-red-500' : inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                  />
                ))}
              </div>

              {isError && <p className="text-center text-sm text-red-600">{errorMessage}</p>}

              <div className="text-center">
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Didn't receive code?{' '}
                  {timer > 0 ? (
                    <span>Resend in {formatTime(timer)}</span>
                  ) : (
                    <button onClick={resendOtp} className="text-orange-500 font-medium hover:underline focus:outline-none">
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

          {/* {!isVerified ? (
            <div className="space-y-6">
              <div className="flex justify-center space-x-3">
                {otpDigits.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    name="otp"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={`w-12 h-12 text-center text-xl font-bold ${inputBgColor} border ${isError ? 'border-red-500' : inputBorderColor} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200`}
                  />
                ))}
              </div>

              {isError && <p className="text-center text-sm text-red-600">{errorMessage}</p>}

              <div className="text-center">
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Didn't receive code?{' '}
                  {timer > 0 ? (
                    <span>Resend in {formatTime(timer)}</span>
                  ) : (
                    <button onClick={resendOtp} className="text-orange-500 font-medium hover:underline focus:outline-none">
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
                    <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                  Continue to Dashboard
                </button>
              </Link>
            </div>
          )} */}

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
