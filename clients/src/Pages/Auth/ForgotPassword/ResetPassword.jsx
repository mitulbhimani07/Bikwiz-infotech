import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import logo2 from '../../../assets/images/logo2.png';
import { useDispatch, useSelector } from 'react-redux'; // ✅ Adjust path to your actual api.js
import { Resetpassword } from '../../../API/Api';
import toast from 'react-hot-toast';

export default function ResetPassword() {
  const [theme, setTheme] = useState('light');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyOtp = useSelector((state) => state.counter.otp); // Make sure 'counter.otp' is set correctly
  const verifyemail=useSelector((state)=>state.counter.email);
  console.log("verifyOtp--",verifyOtp)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

 const handleSubmit = async () => {
  if (!newPassword || !confirmPassword) {
    alert("Both password fields are required.");
    return;
  }
  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const payload = {
    email: verifyemail,
    otp: verifyOtp,
    newPassword: newPassword
  };

  console.log("Sending Reset Password Payload:", payload); // ✅ Debug print

  try {
    const response = await Resetpassword(payload);
    console.log('Password reset successful:', response);
    // alert("Password reset successfully!");
    toast.success("Password reset successfully!!")
    navigate('/login');
  } catch (error) {
    // alert("Failed to reset password. Please try again.");
    console.error("Reset password error:", error);
    toast.error("Failed to reset password. Please try again.")
  }
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
              {theme === 'light' ? (
                <img src={logo} alt="Bikwiz Infotech" width={130} height={130} />
              ) : (
                <img src={logo2} alt="Bikwiz Infotech" width={130} height={130} />
              )}
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
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                name='newPassword'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`appearance-none block w-full px-3 py-3 border ${inputBorderColor} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${inputBgColor}`}
                placeholder="Enter new password"
              />
            </div>

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

            <div>
             <button
  onClick={handleSubmit} // ✅ FIXED
  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
>
  Reset Password
</button>

            </div>

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
